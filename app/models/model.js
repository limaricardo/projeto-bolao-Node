export default (sequelize, Sequelize) => {
    const Season = sequelize.define("seasons", {
        currentMatchDay: Sequelize.STRING,
        
    });
    const Team = sequelize.define("teams", {
        name: {
            type: Sequelize.STRING
        },
        tla: {
            type: Sequelize.STRING
        }
    });
    const Match = sequelize.define("matches", {
        group: Sequelize.STRING,
        competition: Sequelize.STRING,
        matchDay: Sequelize.INTEGER,
        stage: Sequelize.STRING,
        utcDate: "TIMESTAMP",
        matchId: {
            type: Sequelize.INTEGER,
            unique: true
        }
    });

    Match.belongsTo(Team, {
        foreignKey: "homeTeamId",
        as: "homeTeam"
    })
    Match.belongsTo(Team, {
        foreignKey: "awayTeamId",
        as: "awayTeam"
    })

    return {Season, Team, Match}
};