# syntax=docker/dockerfile:1
FROM python:3.9
ENV PYTHONUNBUFFERED=1
WORKDIR /code
COPY requirements.txt /code/
RUN pip3 install -r requirements.txt
COPY . /code/


FLAG=PROTERGO{welcoming_git_don't_forget_to_restrict}
