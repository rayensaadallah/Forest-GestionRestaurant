import cv2
import numpy as np
import tensorflow as tf
from tensorflow.keras.preprocessing.image import img_to_array

from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense

model = Sequential([
    Conv2D(32, (3, 3), activation='relu', input_shape=(224, 224, 3)),
    MaxPooling2D((2, 2)),
    Conv2D(64, (3, 3), activation='relu'),
    MaxPooling2D((2, 2)),
    Conv2D(128, (3, 3), activation='relu'),
    MaxPooling2D((2, 2)),
    Flatten(),
    Dense(64, activation='relu'),
    Dense(1, activation='sigmoid')
])

model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])


# Load the pre-trained model

# Define the classes
classes = {0: 'cat', 1: 'dog'}

# Start the camera
cap = cv2.VideoCapture(0)

# Define the codec and create VideoWriter object
fourcc = cv2.VideoWriter_fourcc(*'XVID')
out = cv2.VideoWriter('C:/Users/Rayen/Desktop/4sae2-devup-dev-up/image/animal_detection.avi', fourcc, 20.0, (640, 480))

# Loop through the frames
while True:
    # Read the frame
    ret, frame = cap.read()
    
    # Convert the frame to RGB and resize it
    frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    frame = cv2.resize(frame, (224, 224))
    
    # Preprocess the frame
    img = img_to_array(frame)
    img = np.expand_dims(img, axis=0)
    img = tf.keras.applications.mobilenet_v2.preprocess_input(img)
    
    # Make a prediction
    pred = model.predict(img)
    pred_class = np.argmax(pred, axis=1)[0]
    pred_prob = np.max(pred, axis=1)[0]
    
    # Display the prediction
    label = classes[pred_class]
    if pred_prob > 0.5:
        cv2.putText(frame, f'{label} {pred_prob:.2f}', (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
        out.write(frame)
        cv2.imshow('Animal Detection', frame)
        cv2.waitKey(1)
        if label == 'cat' or label == 'dog':
            print(f'{label} detected!')
            break
    else:
        cv2.putText(frame, 'No animal found', (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
        out.write(frame)
        cv2.imshow('Animal Detection', frame)
        cv2.waitKey(1)

# Release everything
cap.release()
out.release()
cv2.destroyAllWindows()
