---
title:  "Codebots"
type: work
image: /images/IMGP23571_bw.png
date:   '2018-09-14 17:27:00'
thumbnail: /images/thumbnails/Group 90.png

excerpt:
  "Codebots is an AI-powered app building tool designed for people who aren’t classically trained in programming."
---

Codebots is an AI-powered app building tool designed for people who aren’t classically trained in programming.

My work with Codebots started by assisting in the development of the brand. I would tackle more abstract, futuristic looks for the branding and would go into 3d modelling to try and find a look that would resonate with potential users.

![A one-pager for a futuristic branding for Codebots](/images/work/cb-brand-exploration.png "A one-pager for a futuristic branding for Codebots")
> These designs would be not be used as the robotic abstraction that was found to more alienating to potential users.

While I would assist the Design Lead in the Product Implementation of style in for the platform, my main role would be working on the Diagram Editor. As the designer for Lampbot it was tasked to me to design and build out the Diagram Editor alongside the Diagram Editor's Chief Developer and my own Lampbot developer.

Along with the Product Lead/Design Lead, I would research and test and create ui designs that would be used for the platform. We would work together on a variety of different problems that we each discovered in our respective areas. 

Codebots had a more relaxed agile style, we did not have strict iterations, instead working on improvements and development when they were required.

I would make flows and designs for applications that the Codebots team would build out once the main platform had been launched that would include image recognition applications and trial capabilities. 


The main project I worked on with Codebots was designing and building out the Diagram Editor. We broke up the project into two separate parts, the Schematic and the Interface Builder (Which at the time we called UX Flow). To dip my feet in I would work on the Interface Builder as that is where the most unknowns would be. The goal for the Interface Builder was:
> ##### To be able to create a readable flow of an application (That >connects with the Schematic and requirements)

## Research

For the Interface Builder I would need to diagnose the libraries that I would be creating to use in the interface builder. Based on Lampbot we would need to encapsulate Capabilities(which would soon be known as Behaviors), Tiles, Views, Components and Elements. Where most of that was housed was in an extension view, so I went about drawing up the lists and compiling the information of the objects.

One of the constraints of this project was keeping User Research and Testing within WorkingMouse until Codebots reached Beta launch. I would call upon developers predominately to further understand how they would draw up models that we would be improving on with the Diagram Editor.

To keep our terminology consistent across marketing and development we kept the personas of Captains, Creators & Builders. Captains was the grouping for more managerial types where as Creators and Builders were for Designers and Developers respectively. Whilst other sections of the Codebots Platform would be crucial for Captains, the Diagram Editor was primarily for Creators and Builders (Each getting a respective diagram). 

The developers used the program, Eclipse where they could build a schematic and a view model. These where built out of objects that would be defined by a parent model that defined the rules. As there was few documents that went into the these rules (aside from abstracts defined in Codebots's founders thesis) I need to sift through the graphic and eclipse modelling frameworks in order ot understand. 

Between reading through raw code and sketching out potential flows, I would interview and observe developers in how they used eclipse, what were the boons and what were the missteps. 

This brought to light improvements like duplication, copying and pasting and moving attributes between entities. These may seem small and obvious but this became valuable in understanding methodology of how multiple developers work and how they could better work. 

![Example of a Model](/images/work/model-example.png "Example of a Model")

## Initial Build of the Diagram Editor

After researching and defining the deliverables that would be required for the Interface Builder I would spend my time working and testing the early prototypes of the Diagram Editor with the systems developer. We built this out with [three.js](https://threejs.org/) but kept it seperate from the LAMP stack at this time. The point of this prototyping was to build out and test the set requirements we had discovered.

![Barebone Diagram Editor Prototype](/images/work/de-1.png "Barebone Diagram Editor Prototype")

From there I would be able to build out the shapes that we could use. The developer set up the rules abstract rules that would be shapes on one canvas that would get dragged to another canvas (A palette canvas and the diagram canvas), these shapes could then be connected to each other. A bot developer would then be able to give meaning to those shapes (The relationships defined) and the designer would be able to set what the shapes looked like. This gives the diagram editor the ability to be different things to different bots, as the abstract rules and structure 

We created shapes through svg's, despite the fact that we were using three.js we kept the camera in a 2d scope. We would layer the shapes on the z axis. The svg's would be based on path coordinates, which to begin with meant I had to build out shapes by plotting out coordinates.

![Evolving the Prototyping](/images/work/de-2.png "Evolving the Prototyping")

I quickly discovered that if I was going to make this scalable I would need to  work out a way to bring vector shapes from design tools like Sketch or Adobe XD and convert them into the coordinates.

So with that, I whipped up a very [simple SVG converter](https://codepen.io/jtregenza/pen/dVwzjE) and at the time I worked with a foundation shape kit. The Lampbot's ui was loosely based on foundation and so I utilised Foundation's Kitchen Sink and built out the elements and components to then convert them with my converter. We would later take the learnings from my convertor so that Lampbot could do this step for us. 

## Running Scenarios

With basic shapes understood and a process set up we took a set back from the prototype and defined and developed scenarios that we would run through on the whiteboard. I would create a paper prototype of the diagram editor and document how specifics action would work. This would allow us to define holes and establish rules as to what the Diagram Editor would be for Lampbot.

![An example of the Scenarios](/images/work/de-scenarios.jpg "An example of the Scenarios")

We discovered that, though we had the schematic and interface builder, the functionality and connection between the two were taken care of outside a model. We created a wormhole that would bridge the two models together so that more meaning would be created and the interface builder would have more relevancy to how the data would be set. 

We also established actions that the interface builder would be tasked with. So that once a button would be selected we could initiate these actions. This would again, utilise the interface builder better and allow more end users to build out an entire application, should they choose to, by themselves.

![An Iteration of the Interface Builder Design](/images/work/interface-builder-design.png "Iteration of the Interface Builder")

## Building out the look of the Diagram Editor 

Before I joined, there was another designer that had done some work on the diagram editor, they work side by side with the founder to build out some high fidelity concepts. 

My style of design differed in this way, as I needed to know more about how the systems we were making before I could craft the visual designs. 

So I would iterate on the shapes that we would use, going from the "Extension Shapes" to the "Foundation Shapes" until we understood that leaning on Lampbot's existing objects defined it the parent model would be most beneficial. 

Along with the Design Lead of Codebots we iterated on the design of the diagram editor into a more future ui design, so the gave us the ability to bring in future design plans for the Codebots platform within the diagram editor. 

![Last Design of the Diagram Editor](/images/work/diagram-editor-design.png "Last Design of the Diagram Editor")
> This was the last design that myself and the Design Lead had worked upon for the Diagram Editor (March 2018)

## Learnings

With a design planned out and the scope of development set by the scenarios, we would start showing the public Codebots and the Diagram Editor. We would do live demos of the platform at our Launch, at AI meetups and at Myriad 2018.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/A0Ja_kPUzZU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

> Codebots Demo AI Meetup

Along the way we would refine the shapes that would be used. Improving the designs and beginning to build out plans for more advanced concepts. 

During our workshops at Myriad we discovered that we had not taken into consideration color blindness. Because the Diagram Editor took the design principles of color coding relationships from Eclipse, the only thing to separate entity relationships was red, blue and green. 

Though we had planned out options that would alleviate this issue, we had not implemented the fix, nor would we be able to until well after that point. 

The first run of shapes in the palette would hold up to building out and transforming former access databases into models, but the ui shapes would need rapid expansion in order to be seen as relevant in more fantastical application designs. 

## Wrap Up

The Codebots platform is currently in Closed Beta with select companies taking part in the Codebots Field Trials. The hypothesis of these trials being that development can be more efficient when a development team uses a codebot (Lampbot being the premier bot for the team).