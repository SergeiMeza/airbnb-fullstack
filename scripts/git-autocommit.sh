echo "================================"
echo "AUTOCOMMIT"

git add .

if [ $# -eq 0 ]
  then
    git commit -m "autocommit"
  else
    git commit -m "autocommit: $1"
fi

git push

echo "================================"