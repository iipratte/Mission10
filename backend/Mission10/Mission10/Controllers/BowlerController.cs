using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mission10.Data;

namespace Mission10.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BowlerController : ControllerBase
    {
        private BowlingLeagueContext _bowlingContext;

        public BowlerController(BowlingLeagueContext temp)
        {
            _bowlingContext = temp;
        }

        [HttpGet(Name = "GetBowling")]
        public IEnumerable<Bowler> Get()
        {
            var bowlerList = _bowlingContext.Bowlers.ToList();

            return (bowlerList);
        }
    }
}
