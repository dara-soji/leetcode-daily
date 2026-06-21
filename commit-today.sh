#!/bin/bash

if [ -z "$1" ]; then
  echo "Please provide the problem name."
  echo "Example: ./commit-today.sh 'Name Of Problem Solved'"
  exit 1
fi

git add .

if git diff --cached --quiet; then
  echo "No changes to commit."
  exit 0
fi

git commit -m "Solve: $1"

git push origin main
