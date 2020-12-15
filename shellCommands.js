salih@salih-VirtualBox:~$ pwd
/home/salih
salih@salih-VirtualBox:~$ ls -a
.              .cache        Masaüstü   .vboxclient-clipboard.pid
..             .config       Müzik      .vboxclient-display-svga-x11.pid
.bash_history  Genel         .profile   .vboxclient-draganddrop.pid
.bash_logout   .gnupg        Resimler   .vboxclient-seamless.pid
.bashrc        İndirilenler  .ssh       Videolar
Belgeler       .local        Şablonlar
salih@salih-VirtualBox:~$ mkdir klasor
salih@salih-VirtualBox:~$ touch dosya1
salih@salih-VirtualBox:~$ cp dosya1 ./klasor
salih@salih-VirtualBox:~$ cd klasor
salih@salih-VirtualBox:~/klasor$ rm dosya1
salih@salih-VirtualBox:~/klasor$ echo "Birinci dosya temel shell komutlari" >> yeniDosya.txt
salih@salih-VirtualBox:~/klasor$ cat yeniDosya.txt
Birinci dosya temel shell komutlari
salih@salih-VirtualBox:~/klasor$ grep shell yeniDosya.txt
Birinci dosya temel shell komutlari
salih@salih-VirtualBox:~/klasor$ echo "Ikinci dosya disk islemleri" >> yeniDosya2.txt
salih@salih-VirtualBox:~/klasor$ cat yeniDosya.txt yeniDosya2.txt >> dosyaconcatanete.txt
salih@salih-VirtualBox:~/klasor$ cat dosyaconcatanete.txt
Birinci dosya temel shell komutlari
Ikinci dosya disk islemleri
salih@salih-VirtualBox:~/klasor$ cd ..
salih@salih-VirtualBox:~$ rm -r klasor/
salih@salih-VirtualBox:~$ sudo su
[sudo] salih için parola: 
