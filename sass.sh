npm i -g sass json-sass

json-sass -i ./info.json -o ./style/info.scss -p "\$info: "
for num in {4..10}
do
    echo -e "\$grid-row-cells: $num;\n@import '../main.scss';" > ./style/temp/style-$num.scss
    sass "style/temp/style-$num.scss" "style/out/main-$num.css"
done