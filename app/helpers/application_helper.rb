module ApplicationHelper

  def form_posted_time(time)
    time_d = time + 9.hour
    time_d.strftime("%Y-%m-%d %H:%M ")
  end


end
