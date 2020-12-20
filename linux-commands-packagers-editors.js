salih@salih-VirtualBox:~$ cd ..
salih@salih-VirtualBox:/home$ sudo apt update
[sudo] salih için parola: 
Aynı:  1 http://nl.archive.ubuntu.com/ubuntu focal InRelease                                            
İndir: 2 http://security.ubuntu.com/ubuntu focal-security InRelease [109 kB]                            

//***************************** */
salih@salih-VirtualBox:~$ cd ..
salih@salih-VirtualBox:/home$ sudo apt upgrade
[sudo] salih için parola: 
Paket listeleri okunuyor... Bitti
Bağımlılık ağacı oluşturuluyor   

//****************************** */
salih@salih-VirtualBox:/home$ sudo snap install --classic code
code ea3859d4 from Visual Studio Code (vscode✓) installed

//******************************* */
salih@salih-VirtualBox:~$ wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
--2020-12-20 12:54:54--  https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
dl.google.com (dl.google.com) çözümleniyor... 172.217.168.78, 2a00:1450:400a:803::200e
dl.google.com (dl.google.com)|172.217.168.78|:443 bağlanılıyor... bağlantı kuruldu.
HTTP isteği gönderildi, cevap bekleniyor... 200 OK
Uzunluk: 72446160 (69M) [application/x-debian-package]

//******************************** */
salih@salih-VirtualBox:~$ sudo apt install ./google-chrome-stable_current_amd64.deb
[sudo] salih için parola: 
Paket listeleri okunuyor... Bitti
Bağımlılık ağacı oluşturuluyor       
Durum bilgisi okunuyor... Bitti      
Not, './google-chrome-stable_current_amd64.deb' yerine 'google-chrome-stable' seçiliyor
Aşağıdaki paket otomatik olarak kurulmuş ve artık bu pakete gerek duyulmuyor:
  libfprint-2-tod1

//****************************** */
salih@salih-VirtualBox:~$ google-chrome

//******************************* */
salih@salih-VirtualBox:~$ sudo snap install libreoffice
libreoffice 7.0.2.2 from Canonical✓ installed
salih@salih-VirtualBox:~$
/*Belgelerim dosyası içine Word – Excel –PowerPoint dosyaları oluşturuldu.*/

//****************************** */
salih@salih-VirtualBox:~$ sudo adduser linux
"linux" kullanıcısı ekleniyor ...
Yeni grup "linux" ekleniyor (1002) ...
Yeni kullanıcı "linux" (1002) "linux" grubuyla ekleniyor ...
"/home/linux" başlangıç dizini oluşturuluyor ...
"/etc/skel" dizininden dosyalar kopyalanıyor ...
Yeni parolası: 
Yeni parolasını tekrar girin: 
passwd: şifre başarıyla güncellendi
linux için kullanıcı bilgileri değiştiriliyor

//******************************** */
salih@salih-VirtualBox:~$ sudo addgroup linuxlist
"linuxlist" grubu ekleniyor (GID 1003) ...
Tamamlandı.
salih@salih-VirtualBox:~$

//******************************** */
salih@salih-VirtualBox:~$ vim index.html
salih@salih-VirtualBox:~$ cat index.html
yeni dosya eklendi
salih@salih-VirtualBox:~$ 

//******************************* */
salih@salih-VirtualBox:~$ nano app.js
salih@salih-VirtualBox:~$ cat app.js
ilk nano dosyasi
salih@salih-VirtualBox:~$

//******************************* */
salih@salih-VirtualBox:~$ sudo chown linux ./app.js/
[sudo] salih için parola: 

//******************************* */
salih@salih-VirtualBox:~$ ls -l
toplam 70800
-rw-rw-r-- 1 salih salih       17 dec 20 17:39 app.js
drwxr-xr-x 2 salih salih     4096 dec 20 13:45 Belgeler
-rw-rw-r-- 1 salih salih       20 dec 20 17:26 dosya.txt
drwxr-xr-x 2 salih salih     4096 dec  3 22:54 Genel
-rw-rw-r-- 1 salih salih 72446160 dec  2 03:16 google-chrome-stable_current_amd64.deb
-rw-rw-r-- 1 salih salih       19 dec 20 17:29 index.html
drwxr-xr-x 2 salih salih     4096 dec  3 22:54 İndirilenler
drwxr-xr-x 2 salih salih     4096 dec  3 22:54 Masaüstü
drwxr-xr-x 2 salih salih     4096 dec  3 22:54 Müzik
drwxr-xr-x 2 salih salih     4096 dec  3 22:54 Resimler
drwxr-xr-x 3 salih salih     4096 dec 20 13:38 snap
drwxr-xr-x 2 salih salih     4096 dec  3 22:54 Şablonlar
drwxr-xr-x 2 salih salih     4096 dec  3 22:54 Videolar
salih@salih-VirtualBox:~$ 

//****************************** */
salih@salih-VirtualBox:~$ sudo chmod u=rwx app.js
[sudo] salih için parola: 
salih@salih-VirtualBox:~$ 

//****************************** */
alias   //Kısayol belirleme komutu
df      //Diskin ne kadarının kullanımda  oldugunu bulma komutu
history //işlem gecmişinin terminal komutlarını listeler
date    //saati görüntüleme komutu
grep    //belirli bir dosyadaki metinde arama yapmak için kullanılır.
ps      //Calısan programları gösterir 
kill    //calısmayan bir programı iptal eder 
tar     //Mevcut bir arşive yeni dosyalar eklemek, bir arşivin içeriğini listelemek, bir arşivden içerik çıkarmak vb. icin kullanılabiliriz
top     // çalışmakta olan programların listesini ve bu programların ne kadar CPU kullandığını gösterecektir
du      //Bir dosyanın ne kadar alan kapladığını kontrol etmek icin kullanılan komut
head    //Bir metin dosyasının ilk satırını görüntülemek için kullanılır. 
tail    //Bir metin dosyasının son on satırını görüntülemek için kullanılır.
wget    //İnternet’ten dosya bile indirebiliriz.
find    //Bir dosyayı ana dizinde ve alt dizinlerinde aramak için kullanılır.



