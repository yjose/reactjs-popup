#!/bin/bash  
export WORK_DIR="/media/disk2/Work/my_react/reactjs-popup" 
code $WORK_DIR 
pantheon-terminal  -e 'zsh -c "npm run storybook"'
pantheon-terminal  -e 'bash -c "npm run storybook"'
