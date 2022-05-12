import db from "../models/index.js";
import footballOrg from "../api/footballOrg.js";


const Match = db.matches;

export const importMatches = async (request, response) => {
    const res = await footballOrg.get('/competitions/WC/matches');

    try {
        const mappedMatch = res.data.matches.map((match) => ({
            awayTeamId: match.awayTeam.id,
            homeTeamId: match.homeTeam.id,
            stage: match.stage,
            utcDate: match.utcDate,
            matchId: match.id,
            matchDay: match.matchday,
            competition: res.data.competition.name,
            group: match.group
        }))

        await Match.destroy({
            where: {
                competition: "FIFA World Cup"
            }
        })

        const data = await Match.bulkCreate(mappedMatch)
        
        response.send(data);


    }
    
    catch(err) {
        response.send(err)
    }
    
};

export const listMatches = async (request, response) => {
    const allMatches = await Match.findAll({
        include: ["homeTeam", "awayTeam"]
    });

    response.send(allMatches);
}

