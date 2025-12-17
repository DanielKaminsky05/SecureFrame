# 🏆 SecureFrame: Gold Medal Winner at TTE 🏆

**SecureFrame is an innovative video security application that allows for the selective encryption of objects within a video stream. Harnessing the power of advanced object detection, SecureFrame provides a robust solution for privacy, security, and content redaction.**

![SecureFrame Demo](./docs/SecureframeDemo.mp4)

---

## 🌟 Key Features

-   **Intelligent Object Detection:** Automatically detects and tracks multiple objects in any given video file using the state-of-the-art YOLOv8 model.
-   **Selective Encryption:** Users can select which specific tracked objects they wish to encrypt.
-   **Multiple Encryption Ciphers:** Supports both **AES** and **XOR** encryption methods for flexible security.
-   **Seamless Decryption:** Easily decrypt videos with the correct key (for AES) or automatically (for XOR).
-   **Web-Based Interface:** A modern and user-friendly interface built with React for a smooth user experience.
-   **Python-Powered Backend:** A robust Flask backend handles all the heavy lifting of video processing.

---

## ⚙️ How It Works

The SecureFrame workflow is divided into four main stages:

### 1. Detect
The user uploads a video. The backend uses a YOLOv8 model to perform object detection and tracking, generating a new video with bounding boxes and a JSON file with tracking data.

`User Video -> YOLOv8 Model -> Tracked Video + tracking_data.json`

### 2. Select
The frontend displays the unique object IDs that were tracked. The user selects which objects they wish to redact or encrypt.

`User Selects IDs [1, 5, 10] from UI

### 3. Encrypt
The backend processes the video frame-by-frame. For the user-selected object IDs, it encrypts the corresponding bounding box regions using the chosen cipher (AES or XOR). Metadata required for decryption is saved.

`Tracked Video + Selected IDs -> Encrypted Video + metadata.json`

### 4. Decrypt
The user uploads the encrypted video. If AES was used, they provide the key. The backend reads the saved metadata and decrypts the specified regions, restoring the original content.

`Encrypted Video + metadata.json -> Decrypted Video`

---

## 💻 Tech Stack

-   **Frontend:** React, Vite, CSS
-   **Backend:** Python, Flask
-   **Object Detection:** Ultralytics YOLOv8
-   **Video Processing:** OpenCV

---

## 🚀 Getting Started

### Prerequisites

-   Python 3.11+
-   Node.js and npm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd SecureFrame
    ```

2.  **Setup the Python Backend:**
    ```bash
    # Create and activate a virtual environment
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`

    # Install Python dependencies
    pip install -r requirements.txt
    ```

3.  **Setup the React Frontend:**
    ```bash
    # Navigate to the frontend directory
    cd frontend/app

    # Install Node.js dependencies
    npm install
    ```

### Running the Application

1.  **Start the Flask Backend:**
    From the root project directory, run:
    ```bash
    python server.py
    ```
    The server will start on `http://127.0.0.1:5000`.

2.  **Start the React Frontend:**
    In a separate terminal, from the `frontend/app` directory, run:
    ```bash
    npm run dev
    ```
    The frontend development server will start, and you can access the application in your browser, usually at `http://localhost:5173`.

---

## 📁 Project Structure

```
SecureFrame/
├── frontend/app/         # React Frontend Source Code
├── input/                # Default folder for input videos
├── output/               # Default folder for processed videos and metadata
├── utilities/            # Helper scripts for video, metadata, etc.
├── server.py             # Main Flask application
├── detect_objects.py     # Object detection and tracking logic
├── encrypt_video.py      # Video encryption logic
├── decrypt_objects.py    # Video decryption logic
└── requirements.txt      # Python dependencies
```

---

## 🔮 Future Improvements

-   [ ] Support for live video streams from webcams or IP cameras.
-   [ ] Integration with more encryption standards.
-   [ ] Cloud-based processing and storage.
-   [ ] User authentication and multi-user support.

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
