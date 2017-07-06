---
title: Product design and branding for Reporter, an MVP for Roadmap 2.0.
position: 10
publish: true
image: /assets/images/defaultvalue-dot-info-roadmap6.png
isBrowser: true
layout: project
client:
  name: Roadmap
  url: http://ppmroadmap.com/
collaborator:
  name: Ben Kutil
  url: https://benkutil.com/
tags:
    - Design Systems
    - Minimum Viable Product
    - Research
    - User Experience
---

{% assign image = "defaultvalue-dot-info-roadmap1.png" %} {% assign shadow = true %} {% include srcset-imgix.html %}

*Roadmap is an enterprise-scale project management tool focused on integrating with existing tools and exception-based management.*
{: .measure-wide }

We joined the small team during the summers of 2015 and 2016 to help reimagine Roadmap from the ground up, from both a design and technology perspective. After interviewing different types of customers about their project workflow and about how they use Roadmap, we found what worked and didn’t work about the current release of Roadmap. It became clear that a simpler point of view, better user experience, and a more flexible and easily adoptable tool were essential to satisfy and expand the user base. Because all of these improvements required sweeping changes to Roadmap 1.0, we needed a strategy for slowly rolling out Roadmap 2.0. We developed Reporter as an MVP for Roadmap 2.0 in order to begin that transition.
{: .measure-wide .mb8 }

{% assign image = "defaultvalue-dot-info-roadmap2.png" %} {% assign shadow = false %} {% include srcset-imgix.html %}

Integrations
{: .ma0 .ttu .sans-serif .tracked }

The primary value of Roadmap is collecting data from a variety of tools (Github, Trello, Jira, Basecamp, …) into a single view. A Roadmap customer is often a single administrator or team leader and can use Roadmap to view data from the myriad of tools their team uses day-to-day without asking their team to adopt a new tool.
{: .measure-wide .mt1 }

Reports
{: .ma0 .ttu .sans-serif .tracked }

A Report is a structured comparison of hours, workdays, or dollars across projects, people, tasks, or roles. This allows a user to analyze past data, measure progress, and forecast the future, which enables faster, better decisions.
{: .measure-wide .mt1 .mb8 }

{% assign image = "defaultvalue-dot-info-roadmap8.png" %} {% assign shadow = true %} {% include srcset-imgix.html %}

Base Report
{: .ma0 .ttu .sans-serif .tracked }

Base reports are the core unit of Reporter. Their goal is to provide clear and useful information in a flexible way. A base report comes with a primary data set: Planning Efficiency, Utilization, Project Status, Revenue, Collisions, as well as a series of data columns (logged hours, planned hours, etc). A base report has different views: overview, by time, by distribution, can be viewed across different data sets (hours, work-day, budget dollars) and can be navigated across time and time resolution (week, month, …).
{: .measure-wide .mt1 .mb8 }

{% assign image = "defaultvalue-dot-info-roadmap6.png" %} {% include srcset-imgix.html %}

Hide peripheral information
{: .ma0 .ttu .sans-serif .tracked }

We designed Reporter with the perspective that targeted information is better than complete information, as long as there is easy navigation to ask for contextually related data. A project expands to see the internal tasks, people, and roles. A row can be expanded to view its contributing factors.
{: .measure-wide .mt1 .mb8 }

{% assign image = "defaultvalue-dot-info-roadmap7.png" %} {% include srcset-imgix.html %}

Saved Reports & Filters
{: .ma0 .ttu .sans-serif .tracked }

A base report can be saved with a relative timeframe, optional filters, a custom name, and is collapsed into a small card. Rather than spending time organizing a large table view each time you open Roadmap for a particular task - Saved Reports allows a single setup that can be returned to.
{: .measure-wide .mt1 .mb8 }

{% assign image = "defaultvalue-dot-info-roadmap3.png" %} {% include srcset-imgix.html %}

{% assign image = "defaultvalue-dot-info-roadmap4.png" %} {% include srcset-imgix.html %}

{% assign image = "defaultvalue-dot-info-roadmap5.png" %} {% include srcset-imgix.html %}

Collections
{: .ma0 .ttu .sans-serif .tracked }

Saved Reports can be sorted into Collections and viewed with a targeted context, such as Weekly Meetings. Using collections gives some amount of context before clickthrough rather than wasting time browsing through data looking for what is relevant.
{: .measure-wide .mt1 .mb8 }

{% assign image = "defaultvalue-dot-info-roadmap9.png" %} {% include srcset-imgix.html %}

Dashboard
{: .ma0 .ttu .sans-serif .tracked }

The dashboard displays the general health of a team’s progress, gives access to important status information, as well as provides easy access to pinned Collections. This allows Roadmap to be useful as a quick overview of each business day, rather than a chore or additional baggage.
{: .measure-wide .mt1 }

Exceptions
{: .ma0 .ttu .sans-serif .tracked }

Exceptions are contextually-chosen bounds for data in Roadmap. This helps a user direct their attention to problem areas, and helps prioritize decisions. For example, a project manager might only care about Utilization if it is under 75% or over 110%. A color-coded saved report can alert them to the issue, and they can drill-down to find and solve the problem.
{: .measure-wide .mt1 .mb8 }
