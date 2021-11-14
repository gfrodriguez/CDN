   let contentKey=window.document.body.outerHTML;
   key=contentKey.substring(contentKey.lastIndexOf("x26token")+12,contentKey.indexOf("x26token")+110);
   let url = '/b/stats?style=BLACK_TRANSPARENT&timeRange=ALL_TIME&token='+key;
   fetch(url)
   .then(res => res.json())
   .then((out) => {
	   var countTotal=document.getElementById('TotalPageViews');
	   countTotal.innerHTML = Intl.NumberFormat("en-US").format(out.total);
	   })
	   .catch(err => { throw err });