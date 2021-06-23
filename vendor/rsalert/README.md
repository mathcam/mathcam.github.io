# RSAlert.js
```html
// Files to insert into code

...
	<link rel="stylesheet" type="text/css" href="rsalert.min.css" />
</head>
<body>
...
	<script src="jquery-3.2.1.min.js"></script>
	<script src="rsalert.min.js"></script>
</body>
</html>
```

> ## Default setting
> * **type**
> * **text**
> * **time**
> ---
> `type` at choice:
> * **primary**   - color: #fff; background: #0065d4;
> * **secondary** - color: #000; background: #e4e4e4;
> * **success**   - color: #fff; background: #1faf14;
> * **danger**    - color: #fff; background: #f32a2a;
> * **warning**   - color: #fff; background: #f98009;
> * **light**     - color: #000; background: #fffff;
> * **dark**      - color: #fff; background: #757575;
> * **info**      - color: #fff; background: #68a0de;


```html
// Default function call

...
	<script>
		RSAlert('success','Hello World!', 10);
	</script>
</body>
</html>
```




> ## Non-default settings
> * **type** == `unset`   - 3 more custom settings are added;
> * **text**
> * **time**
> * **font color**
> * **background color**
> * **box shadow color**

```html
// Non-default function call

...
	<script>
		RSAlert('unset', 'Hello World!', 10, '#fff', '#eee', "#000")
	</script>
</body>
</html>
```