class ProjectsController < ApplicationController
  before_filter :require_login, except: [:index, :show]
  include ProjectsHelper

  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
  end

  def new
    @project = Project.new
  end

  def create
    @project = Project.new(project_params)
    @project.save
    redirect_to project_path(@project)
    flash[:notice] = "'#{@project.projectname}' Created"
  end
  
  def edit
    @project = Project.find(params[:id])
  end

  def update
    @project = Project.find(params[:id])
    @project.update(project_params)
    redirect_to project_path(@project)
    flash[:notice] = "'#{@project.projectname}' Updated"
  end

  def destroy
    @project = Project.find(params[:id])
    flash[:notice] = "'#{@project.projectname}' Deleted"
    @project.destroy
    redirect_to projects_path
  end
end
