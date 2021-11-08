#!/bin/bash

loadModule() {
    [ -f "$1" ] || echo "File $1 doesnt exist"
    echo "\$(< $1)"
}

modules=( "./data/gear.js" "./data/presetGear.js" "./scripts/test.js")
args="-i -e \""

for module in "${modules[@]}"; do
    args="$args $(loadModule $module)"
done

eval "node $args\""
