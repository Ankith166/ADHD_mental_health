import threading
import csv
import datetime
from flask import Flask, request, jsonify, render_template
import predictions  # Import the predictions module
from flask_cors import CORS
import matplotlib.pyplot as plt
import matplotlib
from pymongo import MongoClient
from flask_pymongo import PyMongo
from places import scrape_clinic_and_rating
app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabase1"
mongo = PyMongo(app)
matplotlib.use('Agg')


# csv_file_path = 'output.csv'
# data_dict_list = []
# csv_file_path = "ADHD Data - Sheet1.csv"
# with open(csv_file_path, "r") as csv_file:
#     csv_reader = csv.DictReader(csv_file)
#     for row in csv_reader:
#         data_dict_list.append(row)
# mongo.db.adhd_collection.insert_many(data_dict_list)


@app.route("/signup", methods=["POST"])
def signup():
    data = request.json
    username = data.get("username")
    password = data.get("password")
    gender = data.get("gender")
    dob = data.get("dob")
    place = data.get("place")

    print(data)
    user_data = {
        "username": username,
        "password": password,
        "gender": gender,
        "dob": dob,
        "place": place
    }
    # Insert the user data into the MongoDB collection
    mongo.db.user_collection.insert_one(user_data)
    # Return a response to the frontend if needed
    response_data = {"message": "Signup successful"}
    return jsonify(response_data)


@app.route("/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")
    user_data = mongo.db.user_collection.find_one(
        {"username": username, "password": password}
    )
    if user_data:
        # Return a response indicating successful login
        response_data = {"status": 1}
    else:
        # Return a response indicating unsuccessful login
        response_data = {"status": 0}

    return jsonify(response_data)


@app.route("/send_obj_to_server", methods=["POST"])
def send_obj_to_server():
    data = request.get_json()
    print("hi")
    print("received data ", data)

    result = predictions.process_data(data)
    print(result)
    # Extract username and prediction from the data
    username = data.get("Username")
    Attention = data.get("Attentive Score")
    Hyperactivity = data.get("Hyperactivity Score")
    prediction = (Attention + Hyperactivity) / 10
    output_data = {"username": username, "prediction": prediction}
    # Insert the output data into the MongoDB collection
    mongo.db.output_collection.insert_one(output_data)
    gender = None
    dob = None
    age = None
    user_data = mongo.db.user_collection.find_one({"username": username})
    if user_data.get("gender").lower() == "female":
        gender = "F"
    elif user_data.get("gender").lower() == "male":
        gender = "M"
    dob = user_data.get("dob")
    type(dob)
    dob_year = int(dob[:4])
    if dob:
        current_year = datetime.datetime.now().year
        age = current_year - dob_year
    else:
        age = None
    if user_data.get("ADHD of blood relative?") == 0:
        adhd = "NO"
    else:
        adhd = "YES"
    adhd_data = {
        "Username": username,
        "Age": age,
        "Gender": gender,
        "Attentive  Score": Attention,
        "Hyperactivity Score": Hyperactivity,
        "tries": data.get("tries"),
        "time": data.get("time"),
        # "Game1 tries": data.get("Game1 tries"),
        # "Game1 time": data.get("Game1 time"),
        # "Game2 tries": data.get("Game2 tries"),
        # "Game2 time": data.get("Game2 time"),
        "ADHD of blood relative?": adhd,
        "Class": result[0],
    }
    # Insert the output data into the MongoDB collection
    mongo.db.adhd_collection.insert_one(adhd_data)
    # with open("ADHD Data - Sheet1.csv", mode="a", newline="") as file:
    #     writer = csv.writer(file)
    #     writer.writerow(
    #         [
    #             username,
    #             age,
    #             gender,
    #             Attention,
    #             Hyperactivity,
    #             ,
    #             ,
    #             ,
    #             ,
    #             adhd,
    #             result[0],
    #         ]
    #     )

    return jsonify({"result": result})
    # If no match was found, return a response indicating unsuccessful login
    response_data = {"status": 0}


data_dict = {}
for document in mongo.db.output_collection.find():
    username = document['username']
    prediction = document['prediction']

    # Check if the username already exists in the dictionary
    if username in data_dict:
        data_dict[username].append(prediction)
    else:
        data_dict[username] = [prediction]

print(data_dict)
# Define a function to create and save the plot
# Create an empty dictionary to store the data

# # Read data from the CSV file and populate the data_dict
# with open(csv_file_path, mode='r') as file:
#     csv_reader = csv.DictReader(file)
#     for row in csv_reader:
#         name = row['username']
#         pred = row['prediction']
#         if name in data_dict:
#             data_dict[name].append(pred)
#         else:
#             data_dict[name] = [pred]
# print(data_dict)

# def create_and_save_plot(values, username):
#     # Create a line graph using Matplotlib
#     plt.plot(values, range(len(values)), marker='o', linestyle='-')
#     plt.xlabel('Value')
#     plt.ylabel('Index')
#     plt.title(f'Line Graph for {username}')
#     plt.grid(True)
#     # Save the graph as an image in the "static" folder
#     filename = f'static/{username}.png'
#     plt.savefig(filename)
#     plt.close()

# Define a route to display user profiles and line graphs
# Define a function to create and save the plot


def create_and_save_plot(values, username):
    print("vslues:", values)
    print("username", username)
    # Create a line graph using Matplotlib with x and y axes swapped
    plt.plot(range(len(values)), values, marker='o', linestyle='-')
    plt.xlabel('Assesment no.')  # Label for the x-axis (formerly 'Value')
    plt.ylabel('ADHD value')  # Label for the y-axis (formerly 'Index')
    plt.title(f'Line Graph for {username}')
    plt.grid(True)
    # Save the graph as an image in the "static" folder
    filename = f'static/{username}.png'
    plt.savefig(filename)
    plt.close()


# Define a route to display user profiles and line graphs
@app.route("/profile/<username>")
def profile(username):
    print("Hi")
    print(data_dict)
    if username in data_dict:
        values = data_dict[username]
        values = [float(value) for value in values]
        indexed_values = [(index, value) for index, value in enumerate(values)]

        # Create and save the plot in a separate thread
        plot_thread = threading.Thread(
            target=create_and_save_plot, args=(values, username))
        plot_thread.start()

        # Define the image URL
        image_url = f'{username}.png'
        user_data = mongo.db.user_collection.find_one({"username": username})
        if user_data:
            user_place = user_data.get("place")

        # with open('credentials.csv', 'r') as file:
        #     csv_reader = csv.DictReader(file)
        #     for row in csv_reader:
        #         if row['Username'] == username:
        #             user_place = row['Place']
        #             break
            clinic_and_rating_info = scrape_clinic_and_rating(user_place)
            print("indexed", indexed_values)
        # Render the user profile template with the graph and clinic/rating information
            return render_template("profile.html", username=username, indexed_values=indexed_values, image_url=image_url, clinic_and_rating_info=clinic_and_rating_info, user_place=user_place)
    else:
        return render_template("index.html")


if __name__ == '__main__':
    app.run(debug=True)
