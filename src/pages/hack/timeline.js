import React, { Component } from 'react';
import jQuery from 'jquery';

class timeline extends Component {
  componentDidMount() {
    jQuery(document).ready(function ($) {
      var timelines = $('.cd-horizontal-timeline');
      var eventsMinDistance = 60;

      (timelines.length > 0) && initTimeline(timelines);

      function initTimeline(timelines) {
        timelines.each(function () {
          var timeline = $(this);
          var timelineComponents = {};
          // Cache timeline components 
          timelineComponents['timelineWrapper'] = timeline.find('.events-wrapper');
          timelineComponents['eventsWrapper'] = timelineComponents['timelineWrapper'].children('.events');
          timelineComponents['fillingLine'] = timelineComponents['eventsWrapper'].children('.filling-line');
          timelineComponents['timelineEvents'] = timelineComponents['eventsWrapper'].find('a');
          timelineComponents['timelineDates'] = parseDate(timelineComponents['timelineEvents']);
          timelineComponents['eventsMinLapse'] = minLapse(timelineComponents['timelineDates']);
          timelineComponents['timelineNavigation'] = timeline.find('.cd-timeline-navigation');
          timelineComponents['eventsContent'] = timeline.children('.events-content');

          // Assign a left position to the single events along the timeline
          setDatePosition(timelineComponents, eventsMinDistance);
          // Assign a width to the timeline
          var timelineTotWidth = setTimelineWidth(timelineComponents, eventsMinDistance);
          // The timeline has been initialized - show it
          timeline.addClass('loaded');

          // Detect click on the next arrow
          timelineComponents['timelineNavigation'].on('click', '.next', function (event) {
            event.preventDefault();
            updateSlide(timelineComponents, timelineTotWidth, 'next');
          });

          // Detect click on the prev arrow
          timelineComponents['timelineNavigation'].on('click', '.prev', function (event) {
            event.preventDefault();
            updateSlide(timelineComponents, timelineTotWidth, 'prev');
          });

          // Detect click on a single event - show new event content
          timelineComponents['eventsWrapper'].on('click', 'a', function (event) {
            event.preventDefault();
            timelineComponents['timelineEvents'].removeClass('selected');
            $(this).addClass('selected');
            updateOlderEvents($(this));
            updateFilling($(this), timelineComponents['fillingLine'], timelineTotWidth);
            updateVisibleContent($(this), timelineComponents['eventsContent']);
          });

          // On swipe, show next/prev event content
          timelineComponents['eventsContent'].on('swipeleft', function () {
            var mq = checkMQ();
            (mq === 'mobile') && showNewContent(timelineComponents, timelineTotWidth, 'next');
          });

          timelineComponents['eventsContent'].on('swiperight', function () {
            var mq = checkMQ();
            (mq === 'mobile') && showNewContent(timelineComponents, timelineTotWidth, 'prev');
          });

          // Keyboard navigation
          $(document).keyup(function (event) {
            if (event.which === '37' && elementInViewport(timeline.get(0))) {
              showNewContent(timelineComponents, timelineTotWidth, 'prev');
            } else if (event.which === '39' && elementInViewport(timeline.get(0))) {
              showNewContent(timelineComponents, timelineTotWidth, 'next');
            }
          });
        });
      }

      function updateSlide(timelineComponents, timelineTotWidth, string) {
        // Retrieve translateX value of timelineComponents['eventsWrapper']
        var translateValue = getTranslateValue(timelineComponents['eventsWrapper']);
        var wrapperWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', ''));
        // Translate the timeline to the left('next')/right('prev')
        (string === 'next')
          ? translateTimeline(timelineComponents, translateValue - wrapperWidth + eventsMinDistance, wrapperWidth - timelineTotWidth)
          : translateTimeline(timelineComponents, translateValue + wrapperWidth - eventsMinDistance);
      }

      function showNewContent(timelineComponents, timelineTotWidth, string) {
        // Go from one event to the next/previous one
        var visibleContent = timelineComponents['eventsContent'].find('.selected');
        var newContent = (string === 'next') ? visibleContent.next() : visibleContent.prev();

        if (newContent.length > 0) { // If there's a next/prev event - show it
          var selectedDate = timelineComponents['eventsWrapper'].find('.selected');
          var newEvent = (string === 'next') ? selectedDate.parent('li').next('li').children('a') : selectedDate.parent('li').prev('li').children('a');

          updateFilling(newEvent, timelineComponents['fillingLine'], timelineTotWidth);
          updateVisibleContent(newEvent, timelineComponents['eventsContent']);
          newEvent.addClass('selected');
          selectedDate.removeClass('selected');
          updateOlderEvents(newEvent);
          updateTimelinePosition(string, newEvent, timelineComponents, timelineTotWidth);
        }
      }

      function updateTimelinePosition(string, event, timelineComponents, timelineTotWidth) {
        // Translate timeline to the left/right according to the position of the selected event
        var eventStyle = window.getComputedStyle(event.get(0), null);
        var eventLeft = Number(eventStyle.getPropertyValue("left").replace('px', ''));
        var timelineWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', ''));
        var timelineTotWidth = Number(timelineComponents['eventsWrapper'].css('width').replace('px', ''));
        var timelineTranslate = getTranslateValue(timelineComponents['eventsWrapper']);

        if ((string == 'next' && eventLeft > timelineWidth - timelineTranslate) || (string == 'prev' && eventLeft < -timelineTranslate)) {
          translateTimeline(timelineComponents, -eventLeft + timelineWidth / 2, timelineWidth - timelineTotWidth);
        }
      }

      function translateTimeline(timelineComponents, value, totWidth) {
        var eventsWrapper = timelineComponents['eventsWrapper'].get(0);
        value = (value > 0) ? 0 : value; // Only negative translate value
        value = (!(typeof totWidth === 'undefined') && value < totWidth) ? totWidth : value; // Do not translate more than timeline width
        setTransformValue(eventsWrapper, 'translateX', value + 'px');
        // Update navigation arrows visibility
        (value == 0) ? timelineComponents['timelineNavigation'].find('.prev').addClass('inactive') : timelineComponents['timelineNavigation'].find('.prev').removeClass('inactive');
        (value == totWidth) ? timelineComponents['timelineNavigation'].find('.next').addClass('inactive') : timelineComponents['timelineNavigation'].find('.next').removeClass('inactive');
      }

      function updateFilling(selectedEvent, filling, totWidth) {
        // Change .filling-line length according to the selected event
        var eventStyle = window.getComputedStyle(selectedEvent.get(0), null);
        var eventLeft = eventStyle.getPropertyValue("left");
        var eventWidth = eventStyle.getPropertyValue("width");
        eventLeft = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', '')) / 2;
        var scaleValue = eventLeft / totWidth;
        setTransformValue(filling.get(0), 'scaleX', scaleValue);
      }

      function setDatePosition(timelineComponents, min) {
        for (var i = 0; i < timelineComponents['timelineDates'].length; i++) {
          var distance = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]);
          var distanceNorm = Math.round(distance / timelineComponents['eventsMinLapse']) + 2;
          timelineComponents['timelineEvents'].eq(i).css('left', distanceNorm * min + 'px');
        }
      }

      function setTimelineWidth(timelineComponents, width) {
        var timeSpan = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][timelineComponents['timelineDates'].length - 1]);
        var timeSpanNorm = timeSpan / timelineComponents['eventsMinLapse'];
        timeSpanNorm = Math.round(timeSpanNorm) + 4;
        var totalWidth = timeSpanNorm * width;
        timelineComponents['eventsWrapper'].css('width', totalWidth + 'px');
        updateFilling(timelineComponents['timelineEvents'].eq(0), timelineComponents['fillingLine'], totalWidth);

        return totalWidth;
      }

      function updateVisibleContent(event, eventsContent) {
        var eventDate = event.data('date');
        var visibleContent = eventsContent.find('.selected');
        var selectedContent = eventsContent.find('[data-date="' + eventDate + '"]');
        var selectedContentHeight = selectedContent.height();

        if (selectedContent.index() > visibleContent.index()) {
          var classEntering = 'selected enter-right';
          var classLeaving = 'leave-left';
        } else {
          var classEntering = 'selected enter-left';
          var classLeaving = 'leave-right';
        }

        selectedContent.attr('class', classEntering);
        visibleContent.attr('class', classLeaving).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
          visibleContent.removeClass('leave-right leave-left');
          selectedContent.removeClass('enter-left enter-right');
        });
        eventsContent.css('height', selectedContentHeight + 'px');
      }

      function updateOlderEvents(event) {
        event.parent('li').prevAll('li').children('a').addClass('older-event').end().end().nextAll('li').children('a').removeClass('older-event');
      }

      function getTranslateValue(timeline) {
        var timelineStyle = window.getComputedStyle(timeline.get(0), null);
        var timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") ||
          timelineStyle.getPropertyValue("-moz-transform") ||
          timelineStyle.getPropertyValue("-ms-transform") ||
          timelineStyle.getPropertyValue("-o-transform") ||
          timelineStyle.getPropertyValue("transform");

        if (timelineTranslate.indexOf('(') >= 0) {
          var timelineTranslate = timelineTranslate.split('(')[1];
          timelineTranslate = timelineTranslate.split(')')[0];
          timelineTranslate = timelineTranslate.split(',');
          var translateValue = timelineTranslate[4];
        } else {
          var translateValue = 0;
        }

        return Number(translateValue);
      }

      function setTransformValue(element, property, value) {
        element.style["-webkit-transform"] = property + "(" + value + ")";
        element.style["-moz-transform"] = property + "(" + value + ")";
        element.style["-ms-transform"] = property + "(" + value + ")";
        element.style["-o-transform"] = property + "(" + value + ")";
        element.style["transform"] = property + "(" + value + ")";
      }

      // Based on http://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
      function parseDate(events) {
        var dateArrays = [];
        events.each(function () {
          var dateComp = $(this).data('date').split('/');
          var newDate = new Date(dateComp[2], dateComp[1] - 1, dateComp[0]);
          dateArrays.push(newDate);
        });
        return dateArrays;
      }

      function daydiff(first, second) {
        return Math.round((second - first));
      }

      function minLapse(dates) {
        // Determine the minimum distance among events
        var dateDistances = [];
        for (var i = 1; i < dates.length; i++) {
          var distance = daydiff(dates[i - 1], dates[i]);
          dateDistances.push(distance);
        }
        return Math.min.apply(null, dateDistances);
      }

      function elementInViewport(el) {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;

        while (el.offsetParent) {
          el = el.offsetParent;
          top += el.offsetTop;
          left += el.offsetLeft;
        }

        return (
          top < (window.pageYOffset + window.innerHeight) &&
          left < (window.pageXOffset + window.innerWidth) &&
          (top + height) > window.pageYOffset &&
          (left + width) > window.pageXOffset
        );
      }

      function checkMQ() {
        // Check if mobile or desktop device
        return window.getComputedStyle(document.querySelector('.cd-horizontal-timeline'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
      }
    });
  }

  render() {
    // Your React component's render method
    return (
      
<section class="cd-horizontal-timeline">
	<div class="timeline">
		<div class="events-wrapper">
			<div class="events">
				<ol>
					<li><a href="#0" data-date="14/06/2016" class="selected">June 14</a></li>
					<li><a href="#0" data-date="21/06/2016">June 21</a></li>
					<li><a href="#0" data-date="24/06/2016">June 24</a></li>
					<li><a href="#0" data-date="30/06/2016">June 21-30</a></li>
					<li><a href="#0" data-date="08/07/2016"> July</a></li>
					<li><a href="#0" data-date="17/07/2016">June 28</a></li>
					<li><a href="#0" data-date="23/07/2016">June 30</a></li>
					<li><a href="#0" data-date="26/07/2016">Aug 23</a></li>
					<li><a href="#0" data-date="30/07/2016">Sep 25</a></li>
					
					
				</ol>

				<span class="filling-line" aria-hidden="true"></span>
			</div> 
		</div> 
			
		<ul class="cd-timeline-navigation">
			<li><a href="#0" class="prev inactive">Prev</a></li>
			<li><a href="#0" class="next">Next</a></li>
		</ul> 
	</div> 

	<div class="events-content">
		<ol>
			<li class="selected" data-date="14/06/2016">
				<h2>TK</h2>
				<em>June 14th, 2016</em>
				<p>	
					AMA issues CSAPH 	2-A-16, “Human Environmental Effects of LED Community Lighting.”
				</p>
			</li>

			<li data-date="21/06/2016">
				<h2>TK</h2>
				<em>June 21st, 2016</em>
				<p>	
					CNN publishes “Doctors issue warning about LED streetlighting.”
				</p>
			</li>

			<li data-date="24/06/2016">
				<h2>TK</h2>
				<em>June 24th, 2016</em>
				<p>	
					In response to AMA Report 2-A-16, IES Issues “IES Board Position on AMA CSAPH Report 2-A-16.
				</p>
			</li>

			<li data-date="30/06/2016">
				<h2>TK</h2>
				<em>June 21-30th, 2016</em>
				<p>	
					Various entities in the lighting community issue responses to AMA Report 2-A-16.
				</p>
			</li>

			<li data-date="08/07/2016">
				<h2>TK</h2>
				<em>July, 2016</em>
				<p>	
					Lighting publications report on the AMA controversy. 
				</p>
			</li>

			<li data-date="17/07/2016">
				<h2>TK</h2>
				<em>June 28th, 2017</em>
				<p>	
					IES issues Position Statement PS-09-17 (status update of dialogue with AMA). 
				</p>
			</li>

			<li data-date="23/07/2016">
				<h2>TK</h2>
				<em>June 30th, 2017</em>
				<p>	
					IALD endorses IES Position Statement PS-09-17. 
				</p>
			</li>

			<li data-date="26/07/2016">
				<h2>TK</h2>
				<em>August 23rd, 2017</em>
				<p>	
					U.S. Department of Energy’s Solid-State Lighting program issues an activity and research update in its SSL Postings newsletter. 
				</p>
			</li>

			<li data-date="30/07/2016">
				<h2>TK</h2>
				<em>September 25, 2017</em>
				<p>	
					The Washington Post publishes, “Some cities are taking another look at LED lighting after AMA warning.”
				</p>
			</li>

			
		</ol>
        </div>
</section>

    );
  }
}

export default timeline;
