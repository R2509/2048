npm i -g sass json-sass

json-sass -i ./info.json -o ./style/info.scss -p "\$info: "
sass style/main.scss style/main.css