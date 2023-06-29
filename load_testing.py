#! /usr/bin/env python3

import time
from locust import HttpUser, task, between

class QuickstartUser(HttpUser):
    wait_time = between(1, 5)

    @task
    def ok(self):
        self.client.get("/ok")

    @task(2)
    def long_operation(self):
        self.client.get("/long-operation")

    @task
    def failure(self):
        self.client.get("/failure")

    @task(5)
    def random_failure(self):
        self.client.get("/random-failure")

    @task(4)
    def custom_failure(self):
        self.client.get("/custom-failure")

    def on_start(self):
        pass