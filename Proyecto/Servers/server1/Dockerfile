FROM python:3.10-alpine3.15

WORKDIR /backend
COPY app.py ./app.py
RUN pip install Flask
RUN pip install Flask-Cors
RUN pip install pymongo
EXPOSE 5000
CMD ["python", "app.py"]