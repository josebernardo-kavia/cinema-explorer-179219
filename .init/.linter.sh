#!/bin/bash
cd /home/kavia/workspace/code-generation/cinema-explorer-179219/react_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

