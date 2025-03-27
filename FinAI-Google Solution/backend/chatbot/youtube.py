# import os
# from googleapiclient.discovery import build
# from dotenv import load_dotenv

# # Load API keys from .env
# load_dotenv()
# YOUTUBE_API_KEY = os.getenv("YOUTUBE_API_KEY")

# def search_finance_videos(query, max_results=3):
#     """Fetches YouTube videos related to finance topics"""
#     youtube = build("youtube", "v3", developerKey=YOUTUBE_API_KEY)

#     request = youtube.search().list(
#         q=query,
#         part="snippet",
#         type="video",
#         maxResults=max_results
#     )

#     response = request.execute()

#     videos = []
#     for item in response.get("items", []):
#         video_title = item["snippet"]["title"]
#         video_url = f"https://www.youtube.com/watch?v={item['id']['videoId']}"
#         videos.append({"title": video_title, "url": video_url})

#     return videos

# # Example Usage
# if __name__ == "__main__":
#     results = search_finance_videos("What is a mutual fund?")
#     for video in results:
#         print(f"{video['title']}: {video['url']}")
import os
from googleapiclient.discovery import build
from dotenv import load_dotenv

load_dotenv()
YOUTUBE_API_KEY = os.getenv("YOUTUBE_API_KEY")

def search_finance_videos(query, max_results=3):
    """Fetches YouTube videos related to finance topics"""
    try:
        youtube = build("youtube", "v3", developerKey=YOUTUBE_API_KEY)
        request = youtube.search().list(
            q=query,
            part="snippet",
            type="video",
            maxResults=max_results
        )
        response = request.execute()

        return [{
            "title": item["snippet"]["title"],
            "url": f"https://www.youtube.com/watch?v={item['id']['videoId']}"
        } for item in response.get("items", [])]
        
    except Exception as e:
        print(f"YouTube API error: {e}")
        return []

if __name__ == "__main__":
    results = search_finance_videos("What is a mutual fund?")
    for video in results:
        print(f"{video['title']}: {video['url']}")
