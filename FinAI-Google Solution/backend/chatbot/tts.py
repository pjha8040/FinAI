# import os
# import json
# from google.cloud import texttospeech
# from google.oauth2 import service_account
# from dotenv import load_dotenv

# load_dotenv()
# credentials_json = os.getenv("GOOGLE_CREDENTIALS")

# def generate_audio(text, output_file="response.mp3"):
#     """Converts text response to an audio file"""
#     try:
#         if not credentials_json:
#             raise ValueError("Google credentials not found in environment variables")
            
#         credentials_dict = json.loads(credentials_json)
#         credentials = service_account.Credentials.from_service_account_info(credentials_dict)
#         client = texttospeech.TextToSpeechClient(credentials=credentials)
        
#         synthesis_input = texttospeech.SynthesisInput(text=text)
#         voice = texttospeech.VoiceSelectionParams(
#             language_code="en-US",
#             name="en-US-Wavenet-D",
#             ssml_gender=texttospeech.SsmlVoiceGender.NEUTRAL
#         )
#         audio_config = texttospeech.AudioConfig(
#             audio_encoding=texttospeech.AudioEncoding.MP3
#         )

#         response = client.synthesize_speech(
#             input=synthesis_input, voice=voice, audio_config=audio_config
#         )
#         # Saving the audio file in the static folder
#         static_folder = os.path.join(os.path.dirname(__file__), "static")
#         if not os.path.exists(static_folder):
#             os.makedirs(static_folder)

#         output_path = os.path.join(static_folder, output_file)    
#         with open(output_path, "wb") as out:
#             out.write(response.audio_content)
            
#         return output_file # return only the filename
        
#     except json.JSONDecodeError as e:
#         print(f"Invalid JSON format in credentials: {e}")
#         return None
#     except Exception as e:
#         print(f"Text-to-Speech error: {e}")
#         return None

# if __name__ == "__main__":
#     generate_audio("Investing in stocks can be risky but rewarding.")

import os
import json
from google.cloud import texttospeech
from google.oauth2 import service_account
from dotenv import load_dotenv

load_dotenv()
credentials_json = os.getenv("GOOGLE_CREDENTIALS")

def generate_audio(text, output_file="response.mp3"):
    """Converts text response to an audio file"""
    try:
        if not credentials_json:
            raise ValueError("Google credentials not found in environment variables")
            
        credentials_dict = json.loads(credentials_json)
        credentials = service_account.Credentials.from_service_account_info(credentials_dict)
        client = texttospeech.TextToSpeechClient(credentials=credentials)
        
        synthesis_input = texttospeech.SynthesisInput(text=text)
        voice = texttospeech.VoiceSelectionParams(
            language_code="en-US",
            ssml_gender=texttospeech.SsmlVoiceGender.NEUTRAL
        )
        audio_config = texttospeech.AudioConfig(
            audio_encoding=texttospeech.AudioEncoding.MP3
        )

        response = client.synthesize_speech(
            input=synthesis_input, voice=voice, audio_config=audio_config
        )

        # Save audio file in static folder
        static_folder = os.path.join(os.path.dirname(__file__),"static")
        if not os.path.exists(static_folder):
            os.makedirs(static_folder)

        output_path = os.path.join(static_folder, output_file)
        with open(output_path, "wb") as out:
            out.write(response.audio_content)
            
        return output_file  # Return only the filename
        
    except json.JSONDecodeError as e:
        print(f"Invalid JSON format in credentials: {e}")
        return None
    except Exception as e:
        print(f"Text-to-Speech error: {e}")
        return None

if __name__ == "__main__":
    generate_audio("Investing in stocks can be risky but rewarding.")
