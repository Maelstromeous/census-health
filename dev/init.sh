#!/usr/bin/env bash

BASEDIR=$(dirname "$0")
echo "$BASEDIR"

docker build -t exporter -f $BASEDIR/../exporter/provisioning/Dockerfile $BASEDIR/../exporter/provisioning
