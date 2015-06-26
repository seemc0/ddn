# dropDownNavigation
Open Source Javascript-and-CSS-driven dropdown navigation

#How To Use It
I have tried to make this as easy as possible to use for people with little or no coding experience.

Take a look at example.html to get an idea of how it works.

#1
First things first: you will need to download ddn.js and ddn.css and link them to your html page(s). Each file is in its own subfolder; "/scripts" and "styles" respectively.

Your code will look something like this:
```
<html>
<head>
  <script type="text/javascript" src="scripts/ddn.js"></script>
  <link rel="stylesheet" href="styles/ddn.css" />
</head>
<body>
Your website content goes here
</body>
</html>
```

#2
There needs to be one unordered list (<ul>) with an id of "dropDownMenu", containing list elements (<li>) with the class "t1". This constitutes the top level of navigation: Tier 1 and it should look something like this:
  ```
  <ul id="dropDownMenu">
    <li class="t1"><a href="#">First Link</a></li>
    <li class="t1"><a href="#">Second Link</a></li>
    <li class="t1"><a href="#">Third Link</a></li>
  </ul>
  ```

#3
For each dropdown, you need to use a further unordered list (<ul>) with the class "t2", containing list elements (<li>).
Once you've added a dropdown menu, your html should look something like this:
  ```
  <ul id="dropDownMenu">
    <li class="t1"><a href="#">Non-drop down link</a></li>
    <li class="t1">
      <a href="#">DropDown 1</a>
      <ul class="t2">
        <li><a href="#">Dropdown Item 1</a></li>
        <li><a href="#">Dropdown Item 2</a></li>
        <li><a href="#">Dropdown Item 3</a></li>
        <li><a href="#">Dropdown Item 4</a></li>
      </ul>
    </li>
    </ul>
    ```
