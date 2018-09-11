# Nasıl Çalıştıracağız?

Ionic için kurulum ve sdk ayarlamalarının yapıldığını varsayarsak:

### Versiyon Bilgileri

`$ ionic -v`

`1.7.15`

`$ cordova -v`

`6.2.0`

**Kullanılacak platform eklenmeli.**

```bash
$ cordova platform add android
```

### Bağımlılıklar

```bash
$ cordova plugin add cordova-plugin-camera

$ cordova plugin add cordova-plugin-file-transfer

$ cordova plugin add cordova-plugin-file

$ cordova plugin add cordova-plugin-media

$ ionic plugin add cordova-plugin-camera
```

### Çalıştır

`$ ionic run android` komutu ile cihaz üzerinde çalıştırılabilir.

`$ ionic emulate android` komutu ile emulatör üzerinde çalıştırılabilir.

# Ekran Görüntüleri

![screenshots](https://github.com/omfaer/face_detection/blob/master/cv_fd.png)

# Nasıl Hazırlandı?

Bu bir ionic uygulamasıdır. Cihaz üzerinden alınan fotoğrafın upload edilmesini sağlar. Upload için cloudinary kullanıldı. Cloudinary preset özelliği ile fotoğraflar kolayca upload edilebiliyor.

# Kaynaklar

http://ionicframework.com/getting-started/
http://cloudinary.com/blog/direct_upload_made_easy_from_browser_or_mobile_app_to_the_cloud

# License

MIT License

Copyright (c) 2018 Ömer Faruk ER, [https://github.com/omfaer/face_detection](https://github.com/omfaer/face_detection)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
