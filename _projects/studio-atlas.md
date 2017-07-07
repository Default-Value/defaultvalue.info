---
title: An index of graphic design studios and how they describe themselves.
position: 2
publish: true
image: /assets/images/defaultvalue-dot-info-studioatlas3.png
isBrowser: true
layout: project
tags:
    - Product Development
    - Python
    - React
    - Visual Design
---

{% assign image = "defaultvalue-dot-info-studioatlas3.png" %} {% assign shadow = true %} {% include srcset-imgix.html %}

*[Studio Atlas](http://trevorcarr.info/deploy-studio-atlas/) is an experiment in non-intuitive organization.*
{: .measure-wide }

We collected data about studios and their descriptions in to a spreadsheet that could be accessed by API through Sheetlabs. That data is piped into a python script that uses [tf-idf](https://en.wikipedia.org/wiki/Tf%E2%80%93idf) and [t-SNE](https://en.wikipedia.org/wiki/Tf%E2%80%93idf) algorithms to sort the studios. Studios that use similar words or write in a similar way are grouped together.
{: .measure-wide }

The resulting simple React app plots the studios according to their coordinates, creating a field of studio homepages that the user can explore at their own pace. We hope that this encourages a viewer to find relationships between grouped studios in both aesthetic and linguistic terms.
{: .measure-wide .mb8 }

<video autoplay="autoplay" loop="loop" width="100%" class="shadow">
  <source src="/assets/images/defaultvalue-dot-info-studioatlas1.mp4" type="video/mp4" />
</video>

{% assign image = "defaultvalue-dot-info-studioatlas2.png" %} {% assign shadow = true %} {% include srcset-imgix.html %}
