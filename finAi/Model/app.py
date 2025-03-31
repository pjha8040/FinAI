# from flask import Flask, request, jsonify, send_from_directory, render_template
# from chatbot.chatbot import get_financial_answer
# from chatbot.tts import generate_audio
# from chatbot.youtube import search_finance_videos
# from flask_cors import CORS #CORS enabled for frontend and backend communication

# app = Flask(__name__, static_folder='../frontend', template_folder='../frontend')
# CORS(app)  # Allow cross-origin requests

# @app.route('/')
# def index():
#     '''Serves the frontend HTML'''
#     return render_template('index.html')

# @app.route('/chat', methods=['POST'])
# def chat():
#     '''Handles user queries and returns the AI response, Audio and YT Links'''

#     try:
#         data = request.get_json()
#         if not data or "query" not in data:
#             return jsonify({"error": "Invalid request format"}), 400
            
#         user_query = data["query"].strip()
#         if not user_query:
#             return jsonify({"error": "Empty query received"}), 400
        
#         # Processing the query using Chatbot, TTS and YT APIs
#         ai_response = get_financial_answer(user_query)
#         audio_file = generate_audio(ai_response) #returns the filename...
#         videos = search_finance_videos(user_query)

#         return jsonify({
#             "text_response": ai_response,
#             "audio_file": f"/static/{audio_file}" if audio_file else "Error generating audio",
#             "youtube_videos": videos
#         })
        
#     except Exception as e:
#         return jsonify({
#             "error": "Processing failed",
#             "details": str(e)
#         }), 500

# @app.route('/static/<path:path>')
# def serve_static(path):
#     '''Serves static files like audio!''' 
#     return send_from_directory('static',path)   

# if __name__ == "__main__":
#     app.run(debug=True, host ='127.0.0.1', port = 5000)

from flask import Flask, request, jsonify, send_from_directory, render_template
from chatbot.chatbot import get_financial_answer
from chatbot.tts import generate_audio
from chatbot.youtube import search_finance_videos
from flask_cors import CORS  # Enable CORS for frontend-backend communication
import time

app = Flask(__name__, static_folder='static', static_url_path='/static',template_folder='../frontend')
CORS(app)  # Allow cross-origin requests

@app.route('/')
def index():
    """Serve the frontend HTML"""
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    """Handles user queries and returns AI response, audio, and YouTube links"""
    try:
        data = request.get_json()
        if not data or "query" not in data:
            return jsonify({"error": "Invalid request format"}), 400

        user_query = data["query"].strip()
        if not user_query:
            return jsonify({"error": "Empty query received"}), 400

        # Process the query using chatbot, TTS, and YouTube APIs
        ai_response = get_financial_answer(user_query)
        audio_file = generate_audio(ai_response)  
        videos = search_finance_videos(user_query)

        return jsonify({
            "text_response": ai_response,
            "audio_file": f"/static/{audio_file}?t={int(time.time())}" if audio_file else None,
            "youtube_videos": videos
        })

    except Exception as e:
        return jsonify({
            "error": "Processing failed",
            "details": str(e)
        }), 500

@app.route('/static/<path:filename>')
def serve_static(filename):
    """Serve static files like audio"""
    return send_from_directory(app.static_folder,filename)

if __name__ == "__main__":
    app.run(debug=True, host='127.0.0.1', port=5000)
