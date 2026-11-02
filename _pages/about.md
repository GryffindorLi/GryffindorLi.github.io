---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I'm Zirui Li (李孜睿), a doctoral researcher at [Aalto University](https://www.aalto.fi/en/) working with [Prof. Mikko Kurimo](https://www.aalto.fi/en/people/mikko-kurimo) and [Dr. Lauri Juvela](https://www.aalto.fi/en/people/lauri-juvela). My research is primarily about controllable text-to-speech (TTS) at the prosodic and phonetic levels for second-language learning and real-time speech assessment and feedback systems. I'm also interested in developing large-scale speech datasets and open-source models for Nordic TTS.

Before joining Aalto, I obtained an MSc in Embedded Systems at [Delft University of Technology](https://www.tudelft.nl/en/), where I was supervised by [Prof. Odette Scharenborg](https://www.tudelft.nl/en/ewi/over-de-faculteit/afdelingen/intelligent-systems/multimedia-computing/people/odette-scharenborg) and studied regional accent bias in speech recognition. I obtained a BEng in Internet of Things Engineering from [Tianjin University](https://www.tju.edu.cn/english/index.htm).


# 🔥 News
- *2026.02*: &nbsp;🎉🎉 Our paper, *Nord-Parl-TTS: Finnish and Swedish TTS Dataset from Parliament Speech*, has been accepted by ICASSP 2026. See you in Barcelona🇪🇸.
- *2025.09*: &nbsp;🎉🎉 We release *Nord-Parl-TTS*, an open-source TTS dataset for Finnish and Swedish. You're welcomed to check our [demo page](https://gryffindorli.github.io/nord-parl-tts-demo/).
- *2025.06*: &nbsp;🎉🎉 Our paper *Pronunciation Editing for Finnish Speech using Phonetic Posteriorgrams* is accepted by Speech Synthesis Workshop 2025 (SSW13).
- *2024.10*: &nbsp;🎉🎉 I started as a PhD student at Speech Recognition Group at Aalto University.

# 📝 Publications

- **Z. Li**, R. Silas, L. Juvela, T. Bäckström and M. Kurimo, *"EmphTTS: An Emphasis-Control TTS with Reinforcement Learning"*, arXiv:2609.27599, 2026. **Under review**. [Arxiv](https://arxiv.org/abs/2609.27599) [Demo](https://aalto-speech.github.io/EmphTTS/) [Code](https://github.com/aalto-speech/EmphTTS)
- **Z. Li**, J. Edlund, Y. Gu, N. Phan, L. Juvela and M. Kurimo, "Nord-Parl-TTS: Finnish and Swedish TTS Dataset from Parliament Speech," in *ICASSP 2026*. [Paper](https://ieeexplore.ieee.org/abstract/document/11465122) [Demo](https://gryffindorli.github.io/nord-parl-tts-demo/) [Dataset](https://huggingface.co/datasets/Aalto-Speech-Synthesis/Nord-Parl-TTS)
- **Z. Li**, L. Juvela and M. Kurimo, *"Pronunciation Editing for Finnish Speech using Phonetic Posteriorgrams"*, in *13th Speech Synthesis Workshop (SSW13)*, 2025. [Arxiv](https://arxiv.org/abs/2507.02115)  [Code](https://github.com/aalto-speech/PPG2Speech)  [ISCA Archive](https://www.isca-archive.org/ssw_2025/li25_ssw.html#)


# 📖 Educations
- *2024.10 - now*, PhD student, Aalto University, Finland.
- *2021.09 - 2023.07*, M.Sc in Embedded Systems, Delft University of Technology, the Netherlands.
- *2017.09 - 2021.07*, B.Eng in Internet of Things Engineering, Tianjin University, China.


<span id='-internships'></span>

# 💻 Work Experience
{: #work-experience}

- **Software Engineer** (full-time) at [Just Eat Takeaway.com](https://www.justeattakeaway.com/)<br>
  *Aug–Oct 2024 · Enschede, Netherlands*<br>
  Developed payment gateway features and added support for new payment methods across markets.
- **Research & Development Intern** at [AiSpeech Co. Ltd.](https://www.aispeech.com/)<br>
  *Feb–Jun 2024 · Suzhou, China*<br>
  Built a two-stage keyword spotter for in-car speech and implemented streaming rescoring to reduce false alarms.
- **Software Development Engineer Intern** at [Amazon Web Services](https://aws.amazon.com/)<br>
  *Jun–Jul 2023 · Amsterdam, Netherlands*<br>
  Built CloudShell OpsBot with TypeScript and AWS Lambda to help on-call engineers investigate CloudWatch alarms.
- **Machine Learning Engineer Intern** at [Cambricon Technologies](https://www.cambricon.com/)<br>
  *Mar–Jun 2021 · Beijing, China*<br>
  Quantized and deployed YOLOv5s for object detection and Tacotron for speech synthesis on Cambricon's deep learning accelerator.
- **Data Engineering Intern** at [Bosch China](https://www.bosch.com.cn/en/)<br>
  *Aug–Oct 2020 · Changsha, China*<br>
  Built a convolutional network to recognize spare parts and a pipeline to process noisy sensor data.
