export default (sequelize, Sequelize) => {
  const Season = sequelize.define("seasons", {
    currentMatchDay: Sequelize.STRING,
  });
  const Team = sequelize.define("teams", {
    name: {
      type: Sequelize.STRING,
    },
    tla: {
      type: Sequelize.STRING,
    },
  });
  const Match = sequelize.define("matches", {
    group: Sequelize.STRING,
    competition: Sequelize.STRING,
    matchDay: Sequelize.INTEGER,
    stage: Sequelize.STRING,
    utcDate: "TIMESTAMP",
    matchId: {
      type: Sequelize.INTEGER,
      unique: true,
    },
  });
  const User = sequelize.define("users", {
    username: Sequelize.STRING,
    name: Sequelize.STRING,
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validade: {
        isEmail: {
          msg: "Must be a valid email",
        },
      },
    },
    password: Sequelize.STRING,
  });
  const Bet = sequelize.define("bets", {
    date: Sequelize.DATE,
    betHome: Sequelize.INTEGER,
    betAway: Sequelize.STRING,
  });

  Match.belongsTo(Team, {
    foreignKey: "homeTeamId",
    as: "homeTeam",
  });
  Match.belongsTo(Team, {
    foreignKey: "awayTeamId",
    as: "awayTeam",
  });

  Bet.belongsTo(User, {
    foreignKey: "userID",
    as: "user",
  });
  Bet.belongsTo(Match, {
    foreignKey: "matchId",
    as: "match",
  });


  return { Season, Team, Match, User, Bet};
};
