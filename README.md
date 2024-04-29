for upload you should do this:
```html
<form action="http://website/upload/img" method="post" enctype="multipart/form-data">
  <input type="file" name="avatar" />
  <input type="submit" value="Send Request" />
</form>
```