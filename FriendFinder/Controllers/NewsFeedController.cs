using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FriendFinder.Controllers
{
    public class NewsFeedController : Controller
    {
        // GET: NewsFeedController
        public ActionResult Index()
        {
            return View();
        }

        // GET: NewsFeedController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: NewsFeedController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: NewsFeedController/Create
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

        // GET: NewsFeedController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: NewsFeedController/Edit/5
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

        // GET: NewsFeedController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: NewsFeedController/Delete/5
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
