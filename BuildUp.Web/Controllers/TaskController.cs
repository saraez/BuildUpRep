﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BuildUp.BL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BuildUp.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly ITaskManager _TaskManager;

        public TaskController(ITaskManager taskManager)
        {
            _TaskManager = taskManager;
        }
        // GET: api/Task
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Task/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Task
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Task/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
