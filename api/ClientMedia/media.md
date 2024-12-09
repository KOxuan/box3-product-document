<script setup>
import '/style.css'
</script>
# 输入输出

该录音所生成的Blob文件是`audio/wav`格式音频文件。

## 方法

#### <font id="API" />playAudio(<font id="Type">spec?:Partial<{blob:[Blob](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob)}></font>)<font id="Type">: Promise‹void›</font>{#playAudio}

播放录音后的音频，可以传入指定的音频Blob文件。

**输入参数**

| **_参数_** | **_必填_** | **_默认值_** | **_类型_** | **_说明_** |
| --- | --- | --- | --- | --- |
| spec.blob |  | | Blob | 音频内容 |

---
#### <font id="API" />stopPlayAudio()<font id="Type">: void</font>{#stopPlayAudio}

停止播放录音音频。


---

#### <font id="API" />startRecording()<font id="Type">: Promise‹void›</font>{#startRecording}

开始录音。

初次在本浏览器调用时，会弹出录音权限请求，只有通过权限确认，才能进行录音。

---

#### <font id="API" />stopRecording()<font id="Type">: Promise‹[Blob](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob)›</font>{#stopRecording}

停止录音，并返回录音的音频Blob文件。