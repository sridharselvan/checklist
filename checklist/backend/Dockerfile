# Base image with Python
FROM python:3.10-slim

# Set working directory inside the container
WORKDIR /app

# Copy dependencies and install them
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the backend code
COPY . .

# Expose Flask default port
EXPOSE 5000

# Start the Flask app
CMD ["python", "app.py"]
