Hướng dẫn đẩy code lên github

- lần đầu tiên đẩy code, cần phải làm các bước:
  B1: Thực hiện tạo một remote repository ở github
  B2: Git init (tạo local repository)
  B3: Git add . (đẩy file mới hoặc modified lên staging area)
  B4: git commit -m (tạo version)
  B5: git remote add origin (đường dẫn tới remove repository), kết nối local với remote (github.com)
  B6: git push -u origin master(tên nhánh coi ở góc trái dưới vscode), để thực hiện đẩy đẩy code lần đầu tiên từ local lên remote

- Với những lần sau khi đã đẩy code lên rồi thì sẽ có 3 câu lệnh remote repository
  B1: Git add.
  B2: git commit -m
  B3: git push

- git branch -a: dùng để check tất cả branch trong local git
- git checkout "tên branch": để đổi branch
