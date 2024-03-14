const notes = [{
		title: "梦幻西游手游新版本更新",
		content: "今天梦幻西游手游发布了新版本，新增了一些全新的玩法和地图。",
		author: "游戏迷",
		image: "./imgs/1.jpg",
		link: "https://www.taobao.com"
	},
	{
		title: "日本旅行心得",
		content: "最近去了日本旅行，感觉京都特别美，强烈推荐大家去感受一下。",
		author: "旅行达人",
		image: "./imgs/2.jpg",
		link: "https://www.taobao.com"
	},
	{
		title: "瑜伽入门指南",
		content: "想学习瑜伽的朋友可以看看这个入门指南，很适合初学者。",
		author: "瑜伽爱好者",
		image: "./imgs/3.jpg",
		link: "https://www.taobao.com"
	}
];

const noteList = document.getElementById("noteList");

// 生成笔记列表
function renderNotes() {
	noteList.innerHTML = "";
	notes.forEach(note => {
		const li = document.createElement("li");
		li.classList.add("note");
		li.innerHTML = `
      <a href="${note.link}" target="_blank">
        <h2>${note.title}</h2>
        <img src="${note.image}" alt="${note.title}">
        <p>${note.content}</p>
        <p class="author">作者：${note.author}</p>
      </a>
    `;
		noteList.appendChild(li);
	});
}

// 初始化页面
function init() {
	renderNotes();
}

// 调用初始化函数
init();