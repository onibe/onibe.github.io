{% extends "layouts/layout.njs" %}

{% set data = data %}

{% block content %}
<div>
{#<div class="navbar-offset">#}
    <div class="team-member-wrapper bg-check-source" >
        <div class="team-member-cover container">
            <div class="row">
                <div class="col-md-12">
                    <div class="wrap">
                        <h1 style="color: #FFFFFF;  text-shadow: 2px 2px 0px rgba(100, 150, 200, 1);">Meet the team</h1>
                        <div style="color: #FFFFFF;  text-shadow: 2px 2px 0px rgba(100, 150, 200, 1);"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="team voffset4">
        <div class="container voffset">
            <div class="row">
                {% for item in data.team %}
                    <div class="col-sm-6 col-md-3 team-member">
                        {% if item.picture %}
                            <a class="team-member-image-link" href="/team/{{ item.username }}">
                                <img src="{{ item.picture }}" class="team-member-image">
                            </a>
                        {% else %}
                            <a class="team-member-image-link" href="/team/{{ item.username }}">
                                <img src="/onibe-light/images/profile-pics/spaghetti.png" class="team-member-image">
                            </a>
                        {% endif %}
                        <a class="team-member-image-link" href="/team/{{ item.username }}">
                            <h4 class="team-member-name">{{ item.username }}</h4>
                        </a>
                        <a class="team-member-image-link" href="/team/{{ item.username }}">
                            <p class="team-member-title">{{ item.profile }}</p>
                        </a>
                    </div>
                    {% if loop.index % 4 == 0 %}
                        <div class="voffset4 rvoffset4 clearfix visible-md-block visible-lg-block"></div>
                    {% endif %}
                    {% if loop.index % 2 == 0 %}
                        <div class="voffset4 rvoffset4 clearfix visible-sm-block visible-sm-block"></div>
                    {% endif %}
                {% endfor %}
            </div>
        </div>
    </section>
</div>
{% endblock %}