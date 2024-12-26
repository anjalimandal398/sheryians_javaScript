const arr = [
    {
      profilePic: 'https://images.unsplash.com/photo-1634715281818-ce65b4dbc99f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      story:'https://images.unsplash.com/photo-1734187255412-83404a7d16da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
      timeAgo: '11hr ago',
      fullName: 'Soul Bhn'
    },
    {
      profilePic: 'https://images.unsplash.com/photo-1585229593069-33de2c90911d?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      story:'https://images.unsplash.com/photo-1577201866982-97ac098537e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8',
      timeAgo: '3 hours ago',
      fullName: 'Bhutoo'
    },
    {
      profilePic: 'https://images.unsplash.com/photo-1514654306380-538bac0ed82c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWxzfGVufDB8fDB8fHww',
      story:'https://images.unsplash.com/photo-1512484580809-b5251c5df9dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8',
      timeAgo: '1 day ago',
      fullName: 'Vaishnavi'
    },
    {
      profilePic: 'https://plus.unsplash.com/premium_photo-1708110921398-1fc68e98eacc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      story:'https://plus.unsplash.com/premium_photo-1732776567041-885234fdc3c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D',
      timeAgo: '12min ago',
      fullName: 'Mahima'
    },
    {
      profilePic: 'https://plus.unsplash.com/premium_photo-1664879065964-20abef455f4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk3fHx8ZW58MHx8fHx8',
      story:'https://images.unsplash.com/photo-1734389481041-fa26afc1267c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D',
      timeAgo: '48 minutes ago',
      fullName: 'Hemlata'
    },
    {
      profilePic: 'https://images.unsplash.com/photo-1641214880602-3c9cd45eadf5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D',
      story:'https://images.unsplash.com/photo-1734532873375-574fd74045c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D',
      timeAgo: '30 minutes ago',
      fullName: 'Bhaiji'
    },
    {
      profilePic: 'https://images.unsplash.com/photo-1645231886878-06478c04f9fa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      story:'https://images.unsplash.com/photo-1606916929342-fef8a9b43f25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D',
      timeAgo: '5 hours ago',
      fullName: 'didi'
    },
    {
      profilePic: 'https://images.unsplash.com/photo-1560857617-84149b7abe53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU3fHx8ZW58MHx8fHx8',
      story:'https://images.unsplash.com/photo-1608086042577-50e786b68c84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
      timeAgo: '9hr ago',
      fullName: 'Poornima Amule clg'
    },
    {
      profilePic: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsJTIwbWVufGVufDB8fDB8fHww',
      story:'https://images.unsplash.com/photo-1544005223-2d3e1c4dfb33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
      timeAgo: '2min ago',
      fullName: 'Srathak Bhaiya'
    },
    {
      profilePic: 'https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWxzfGVufDB8fDB8fHww',
      story:'https://images.unsplash.com/photo-1543589076-95fa225c668f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8',
      timeAgo: '5min ago',
      fullName: 'Harsh Bhaiya'
    },
    {
      profilePic: 'https://images.unsplash.com/photo-1531370114630-ea11cde63962?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      story:'https://images.unsplash.com/photo-1605012833863-e5771ccabae1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8',
      timeAgo: '15 minutes ago',
      fullName: 'Laysha Bisen clg'
    },
    {
      profilePic: 'https://images.unsplash.com/photo-1617922236117-2697cb394593?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D',
      story:'https://images.unsplash.com/photo-1573829229746-28466756ec00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
      timeAgo: '7 hours ago',
      fullName: 'Tannu Bopche clg'
    },
    {
      profilePic: 'https://images.unsplash.com/photo-1618375279997-351e32d80a02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
      story:'https://images.unsplash.com/photo-1612176963909-3fdb62cdc67c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8',
      timeAgo: '1min ago',
      fullName: 'Sakshi Dubey clg'
    },
    {
      profilePic: 'https://plus.unsplash.com/premium_photo-1675578732514-a528889875e2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      story:'https://images.unsplash.com/photo-1576344333128-4682ea1e9970?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
      timeAgo: '17hr ago',
      fullName: 'Mummy'
    },
    {
      profilePic: 'https://images.unsplash.com/photo-1557446772-0985ac892643?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      story:'https://images.unsplash.com/photo-1545602334-0bf5a623bd94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8',
      timeAgo: '45 minutes ago',
      fullName: 'Jiju'
    }
];

let sum = ''
arr.forEach(function(elem,idx) {
    sum = sum+  `
    <div class="user"  id=${idx}>
        <div class="profile">
            <img src="${elem.profilePic}" alt="${elem.fullName}">
        </div>
        <div class="info">
            <h1>${elem.fullName}</h1>
            <h2>${elem.timeAgo}</h2>
        </div>
    </div>`;
});

var AllStatus=document.querySelector('.AllStatus');
var full =document.querySelector('.full')
AllStatus.innerHTML=sum



AllStatus.addEventListener('click',function(dets){
  var value =arr[dets.target.id]
 
  full.style.display='block'
  full.style.backgroundImage=`url(${value.story})`
})