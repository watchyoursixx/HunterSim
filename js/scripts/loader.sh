#!/bin/bash
logAndExit() {
    echo "Error: $1"
    exit -1
}

loadFile() {
    echo "\$(< $1)"
}

loadModule() {
    if [ -d "$1" ]; then
        args=""
        for file in $(ls $1); do
            arg=$(loadFile "$1/$file")
            args="$args $arg"
        done
        echo "$args"
    elif [ -f "$1" ]; then
        loadFile "$1"
    else
        return 1
    fi
}

modules=( "./data" "./statCalculator.js" "./scripts/test.js")
args="-i -e \""

for module in "${modules[@]}"; do
    arg=$(loadModule "$module")
    [ $? != 0 ] && logAndExit "$module is not a file or a dir"

    args="$args $arg"
done

eval "node $args\""
