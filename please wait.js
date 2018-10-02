var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64._utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output=output+ this._keyStr.charAt(enc1)+ this._keyStr.charAt(enc2)+ this._keyStr.charAt(enc3)+ this._keyStr.charAt(enc4);}
return output;},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+ String.fromCharCode(chr1);if(enc3!=64){output=output+ String.fromCharCode(chr2);}
if(enc4!=64){output=output+ String.fromCharCode(chr3);}}
output=Base64._utf8_decode(output);return output;},_utf8_encode:function(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}
else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;},_utf8_decode:function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;}
else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+ 1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}
else{c2=utftext.charCodeAt(i+ 1);c3=utftext.charCodeAt(i+ 2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return string;}}
var encode=document.getElementById('encode'),decode=document.getElementById('decode'),output=document.getElementById('output'),input=document.getElementById('input');var User_ID="";var protected_links="";var a_to_va=0;var a_to_vb=0;var a_to_vc="";function auto_safelink(){auto_safeconvert();}
function auto_safeconvert(){var a_to_vd=window.location.hostname;if(protected_links!=""&&!protected_links.match(a_to_vd)){protected_links+=", "+ a_to_vd;}else if(protected_links=="")
{protected_links=a_to_vd;}
var a_to_ve="";var a_to_vf=new Array();var a_to_vg=0;a_to_ve=document.getElementsByTagName("a");a_to_va=a_to_ve.length;a_to_vf=a_to_fa();a_to_vg=a_to_vf.length;var a_to_vh=false;var j=0;var a_to_vi="";for(var i=0;i<a_to_va;i++)
{a_to_vh=false;j=0;while(a_to_vh==false&&j<a_to_vg)
{a_to_vi=a_to_ve[i].href;if(a_to_vi.match(a_to_vf[j])||!a_to_vi||!a_to_vi.match("http"))
{a_to_vh=true;}
j++;}
if(a_to_vh==false)
{var encryptedUrl=Base64.encode(a_to_vi);a_to_ve[i].href="http://skateboards-pics.blogspot.com/p/please-wait.html?url="+ encryptedUrl;a_to_ve[i].rel="nofollow";a_to_vb++;a_to_vc+=i+":::"+ a_to_ve[i].href+"\n";}}
var a_to_vj=document.getElementById("anonyminized");var a_to_vk=document.getElementById("found_links");if(a_to_vj)
{a_to_vj.innerHTML+=a_to_vb;}
if(a_to_vk)
{a_to_vk.innerHTML+=a_to_va;}}
function a_to_fa()
{var a_to_vf=new Array();protected_links=protected_links.replace(" ","");a_to_vf=protected_links.split(",");return a_to_vf;} 
Keterangan :
Url_Link : Ganti dengan alamat posting sobat tadi
Lebih jelasnya bisa dilihat pada gambar dibawah ini :
Cara Membuat Safelink dengan Blogger Work 100%

#Langkah 5
Upload script JavaScript yang telah dibauat tadi ke GitHub.com untuk tutorialnya bisa kunjungi artikel ini Cara Mengupload file ke github .

#Langkah 6
Setelah file terupload kembali lagi ke postingan yang telah dibuat tadi, edit dan ganti kode "Kode_JavaScript" dengan alamat js yang telah sobat upload tadi. contoh :
Cara Membuat Safelink dengan Blogger Work 100%

#Langkah 7
Nah pembuatan safelink suda jadi, langkah selanjutnya adalah masuk ke bog utama, dan kita akan menghubungkan dengan blog safelink, dengan cara :
Masuk ke Blog utama pilih Tata letak > Tambahkan Gedet > Html JavaScript dan pastekan kode berikut kesana.
<script type="text/javascript" src="Kode_JavaScript"></script>
<script type="text/javascript">
protected_links = "Protect_Url";
auto_safelink();
</script> 
Keterangan :
Kode_JavaScript : Ganti dengan alamat javascript yang di upload sobat tadi
Protect Url : Isikan dengan alamat website yang tidak ingin dilewati oleh safelink, contohnya google.com, facebook.com, youtube.com, blogger.com dan perlu di ingat untuk memisahkanya menggunakan tanda koma.
Selebihnya bisa dilihat contoh gambar dibawah ini :
Cara Membuat Safelink dengan Blogger Work 100%
!!! Penting : 
Tempatkan gedet penghubung tadi tepat dibwah widget posting blog, atau bisa dilihat gambar dibwah ini :
Cara Membuat Safelink dengan Blogger Work 100%

Info Tambahan :
Pemilihan Protect Link :
Pemlihan protect link sebaiknya adalah website social media seperti facebook, twitter, google plus, dam instagram adapun selain social media adalah website penting seperti google, youtube, blogger, dan yahoo ini berguna agar pengunjung tidak terlalu banyak menemui safelink yang tentunya membuat bosan. Dan yang perlu dihindari adalah website tempat sobat mengupload file seperti zippyshare, 4shared, kbagi dan sebagainya.
Error yang Sering Terjadi :
Visit Link tidak berfungsi
Kejadian ini biasanya terjadi karena kesalahan pada file js, atau alamat file js, jadi pastikan keduanya telah benar.
Selain itu penyebab lainya adalah kesalahan pada url posting, jadi silahkan lebih teliti dalam membuat url.
Muncul Tulisan Mandarin dan 404 Not Found
Kesalahan ini biasanya terjadi karena alamat yang kita tulis buka https tetapi http, jadi pastikan semua yang kita tuliskan baik di template maupun di postingan adalah https.
Note : Jika masih terdapat error dan tidak bisa mengatasi lagi, bisa menggunakan jasa dari Admin dengan harga yang terjangkau, silahkan hubungi admin saja.
WA 085643528803

Nah itulah tadi tutorial cara membuat safelink di blogger dengan mudah, tutorial ini 100% work dan aman jika sobat mempraktekanya dengan teliti dan mengikuti tutorial dari saya saja. Selebihnya jika ada pertanyaan bisa ditanyakan di komentar atau bisa menghbungi admin. Terimakasih sudah berkunjung.

 

 


Share on FacebookShare on TwitterShare on Google+Share on LinkedIn
RELATED POSTS :

Cara Memasang Iklan di Tengah Postingan
Alfa Arts - Cara Memasang Iklan di Tengah Postingan Penempatan iklan pada blog adalah salah satu kunci mendapatkan banyak klik pada iklan ki… Read More...
Cara Sukses dari Internet, Mencermati dan Meniru Bill Gates, dan Mark Zuckerberg
ALFA ARTS - Kali ini saya akan bercerita dan sekaligus memberikan inspirasi bagi semua yang membacanya, kita sebagai manuasia pasti ingin … Read More...
Cara Memasang Anti Copy Paste di Blog
Alfa Arts - Cara Memasang Anti Copy Paste di Blog Kini banyak blogger yang hanya mengandalkan copy paste dalam membuat artikel, ditambah lag… Read More...
Cara Memasang Tombol Like Fanspage Melayang di Blog
ALFA ARTS - Cara Memasang Tombol Like Fanspage Melayang di Blog Salah satu cara mendapatkan like di fp (fanspage) kita adalah mempromosikany… Read More...
Cara Memasang Matched Content Adsense pada Blog
Alfa Arts - Cara Memasang Matched Content Adsense pada Blog Iklan Metached Content adalah sebuah iklan khusus yang diberikan oleh google kep… Read More...

Newer PostOlder PostHome
POPULAR POSTSLABELARSIP
Cara Mengatasi Error Saat Installasi Adobe
Cara Setting PCSX2 Agar Tidak Lag, FPS 50-60
Cara Mengatasi E: Unable To Locate package pada Linux
Build Item Kagura Tersakit Dari RRQ Lemon
Cara Mengatasi Error 0xc00007b pada Game WORK 100%
Cara Membuat Portal The End dan Cara Mengalahkan Ender Dragon di Minecraft
Cara Bypass Login Wifi.id (Login Tanpa Akun) Gratis 100%
Cara Mengatasi Lag di Minecraft
Cara Mendapatkan Sticker MasterCard, GoPro, Hostagor Gratis
Rakit PC Intel Generasi 8 Coffe Lake Feat GTX 1050Ti
