#!/bin/bash
# github.event.pull_request.labels.*.name
#
# bash get-label.sh -n 'major, minor, patch' -l 'major, feature'

while getopts ":l:n:" opt; do
  case $opt in
  l)
    LABELS="$OPTARG"
    ;;
  n)
    NEEDS="$OPTARG"
    ;;
  \?)
    echo "Invalid option -$OPTARG" >&2
    exit 1
    ;;
  esac

  case $OPTARG in
  -*)
    echo "Option $opt needs a valid argument"
    exit 1
    ;;
  esac
done

printf "LABELS=%s\n" "$LABELS"
printf "NEEDS=%s\n" "$NEEDS"
IFS=', '
read -r -a labelArray <<<"$LABELS"
read -r -a needsArray <<<"$NEEDS"

printf "labelArray=%s\n" "${labelArray[@]}"
printf "needsArray=%s\n" "${needsArray[*]}"

for label in "${labelArray[@]}"; do
  for need in "${needsArray[@]}"; do
    if [[ "$label" == "$need" ]]; then
      echo "$label" > match.txt
      exit 0
    fi
  done
done
exit 1
