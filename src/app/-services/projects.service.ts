import { Injectable } from '@angular/core';
import { project } from '../-models/project';
import { Tag } from '../-models/Tag';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: project[] = [
    // {id: 0, name: "Sample Python Project", pictures: ["../../assets/x4vfnJX.png","../../assets/HJh7AjT.png","../../assets/1bNL0Ft.png"], projectLink: "//www.github.com", summary: "Python project that analyzes stock market data.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.PYTHON]},
    {id: 1, name: "Sample Angular App", pictures: ["../../assets/Pic1.png","../../assets/Pic2.png","../../assets/Pic3.png"], projectLink: "//www.github.com", summary: " 'Portfolio' web developed using ANGULAR and TYPESCRIPT.", description: "Designed several portfolio websites using Angular and TypeScript for smooth, interactive user experiences. Used Angular's components and TypeScript's typing for sturdy, scalable apps. Made them visually appealing and easy to use with modern design and tech skills. Each site reflects creativity, expertise, and a love for great web design.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},
    {id: 2, name: "Sample .Net App", pictures: ["../../assets/Img1.png","../../assets/Img2.png","../../assets/Img3.png"], projectLink: "//www.github.com", summary: "Web Development Intern, focusing on the pivotal project 'StoreOnline' using ANGULAR,TYPESCRIPT and .NET in C# for backend development also used PostgreSQL database for data management.", description: "Development of the 'StoreOnline' website: User authentication for secure access to the website.Product listing with search and filter functionalities.Shopping cart for seamless product selection and checkout process.	Integration of Stripe payment gateway for secure online transactions.	Implementation of RDLC invoice report generation for order tracking and management.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT,Tag.CSHARP, Tag.ASPNET]},
    // {id: 3, name: "Web API Project", pictures: ["../../assets/x4vfnJX.png","../../assets/HJh7AjT.png","../../assets/1bNL0Ft.png"], projectLink: "//www.github.com", summary: "Web API Project that was developed for a class project.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.CSHARP, Tag.ASPNET]},
    // {id: 4, name: "Chrome Extension", pictures: ["../../assets/x4vfnJX.png","../../assets/HJh7AjT.png","../../assets/1bNL0Ft.png"], projectLink: "//www.github.com", summary: "Developed a chrome extension that tracks the prices of furniture.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JAVASCRIPT]},
    // {id: 5, name: "Mobile App", pictures: ["../../assets/x4vfnJX.png","../../assets/HJh7AjT.png","../../assets/1bNL0Ft.png"], projectLink: "//www.github.com", summary: "Mobile app developed in java that tracks the departure and arrival of trains.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JAVA]}
  ];
  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id:number):project{
    let project = this.projects.find(project => project.id === id);

    if (project  === undefined){
      throw new TypeError("There is no project that matches the id:  " + id);

    }
      return  project;
  }
  GetProjectsByFilter(filterTags:Tag[]){
    let filterProjects:project[] = [];

    this.projects.forEach(function(project){
      let foundAll =true;

      filterTags.forEach(function(filterTag){
        if (project.tags.includes(filterTag) == false){
          foundAll = false;
        }       
      });

      if (foundAll){
        filterProjects.push(project);
      }
    });
    return filterProjects;
  }


}
