import pandas as pd
from sklearn.preprocessing import LabelEncoder
import joblib

# Load the SVM model
# Replace 'svm_model.pkl' with the correct path
svm_model = joblib.load('svm_model.pkl')

# Debugging: Print the feature names used during training
print("Feature names used during training:", svm_model.feature_names_in_)

# Define a function to process and predict the data


def process_data(data):
    # Convert 'ADHD of blood relative?' to numeric using label encoding
    label_encoder = LabelEncoder()
    # data['ADHD of blood relative?'] = label_encoder.transform([data['ADHD of blood relative?']])

    # Debugging: Print the processed data

    print("Processed data for prediction:", data)
    formatted_data = {
        'Attentive Score': data['Attentive Score'],
        'Hyperactivity Score': data['Hyperactivity Score'],
        'tries': data['tries'],
        'time': data['time'],
        'ADHD of blood relative?': data['ADHD of blood relative?']

    }
    print("Formatted data for prediction:", formatted_data)
    # Create a DataFrame from the data
    new_data = pd.DataFrame(formatted_data, index=[0])

    # Debugging: Print the DataFrame
    print("DataFrame for prediction:")
    print(new_data)

    # Make predictions using the loaded SVM model
    y_pred_new = svm_model.predict(new_data)

    # Debugging: Print the predicted results
    print("Predicted results:", y_pred_new)

    return y_pred_new.tolist()

# Example usage in server.py:
# data = {'feature1': 10, 'feature2': 20, 'ADHD of blood relative?': 'Yes'}
# predicted_results = process_data(data)
# return jsonify({'predicted_results': predicted_results})
