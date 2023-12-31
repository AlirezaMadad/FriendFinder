﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FriendFinder.Controllers
{
    public class TimeLineController : Controller
    {
        // GET: TimeLineController
        public ActionResult Index()
        {
            return View();
        }

        // GET: TimeLineController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: TimeLineController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: TimeLineController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: TimeLineController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: TimeLineController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: TimeLineController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: TimeLineController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
