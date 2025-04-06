# import google.generativeai as genai
# import os
# from dotenv import load_dotenv

# # Load API keys from .env
# load_dotenv()

# GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# # Configure Gemini API
# genai.configure(api_key=GEMINI_API_KEY)

# def get_financial_answer(user_query):
#     """Generates AI-powered financial responses using Google Gemini API"""
#     response = genai.chat(user_query)
#     return response.text

# # Example Usage
# if __name__ == "__main__":
#     print(get_financial_answer("What is a mutual fund?"))


import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

now = "Engage with users in a conversational tone to explain complex financial concepts. Respond to user queries as if you're discussing the topic over coffee or while taking a walk. Use everyday examples, anecdotes, and metaphors to make the information relatable and easier to understand. When needed, offer additional context, definitions, or supporting data to help clarify and reinforce your explanations."

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=GEMINI_API_KEY)
    
def get_financial_answer(user_query):
    """Generates financial responses using latest Gemini models"""
    try:
        # Use updated model name from supported list
        model = genai.GenerativeModel(
            model_name='gemini-1.5-flash-001',  # Verified working model
            generation_config={
                "temperature": 0.9,
                "max_output_tokens": 2048
            },
            safety_settings={
                'HARASSMENT': 'BLOCK_NONE',
                'HATE_SPEECH': 'BLOCK_NONE'
            }
        )
        response = model.generate_content(
            f"{now} Answer concisely: {user_query}"
        )
        return response.text

    
    except Exception as e:
        print(f"API Error: {str(e)}")
        return "Financial service unavailable. Please try again later."       
    

if __name__ == "__main__":
    print(get_financial_answer("What is a mutual fund?"))
