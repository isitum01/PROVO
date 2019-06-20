using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ProvoAPI.Models;

namespace ProvoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationUserController : ControllerBase
    {
        private UserManager<ApplicationUser> _userManager;
        private SignInManager<ApplicationUser> _signInManager;

        public ApplicationUserController(UserManager<ApplicationUser>userManager, SignInManager<ApplicationUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpPost]
        [Route("Register")]
        //POST : /api/ApplicationUser/Register
        public async Task<Object> PostApplicationUser(ApplicationUserModel model)
        {
            var applicationUser = new ApplicationUser() {
                aIme = model.aIme,
                aPrezime = model.aPrezime,
                UserName = model.aUsername
            };

            try
            {
                var result = await _userManager.CreateAsync(applicationUser, model.aPass);
                return Ok(result);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

    }
}