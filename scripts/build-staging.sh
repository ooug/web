#!/bin/sh

echo "Runing Post Build Script for Staging ..."

# Copy all files from static/staging and paste into dist/web
cp -RPv ./static/staging/* ./dist/web/

echo "Post Build Task Completed."
