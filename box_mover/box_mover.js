let box = document.getElementById("box_div");
let mov = document.getElementById("box_div_mover");
let box_color = ["orange","green","black"];
	function aniMove()
	{
		let count = 0;
		console.log("Add");
		let mov_box = setInterval(fun,3);
		let i = 0,j=0,k=450,l=450;
		function fun()
		{
					console.log("run");
					if(i==450)
					{
						box.style.backgroundColor = box_color[2];
						mov.style.backgroundColor = box_color[0];
						if(j==450)
						{
							box.style.backgroundColor = box_color[0];
							mov.style.backgroundColor = box_color[1];
							if(k==0)
							{
								box.style.backgroundColor = box_color[1];
								mov.style.backgroundColor = box_color[2];
								if(l==0)
								{
									clearInterval(mov_box);
								}
								else
								{
									l--;
									mov.style.top = l+'px';
								}
							}
							else
							{
								k--;
								mov.style.left = k+'px';
							}
						}
						else
						{
							j++;
							mov.style.top = j+'px';
						}
					}
					else
					{
					i++;
					mov.style.left = i+'px';
					}
		}
	}