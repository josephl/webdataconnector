/**
 * Define schemas
 */
const portlandTeamId = 26;

const schema = {
  // players: {
  //   id: "players",
  //   alias: "Blazer Players",
  //   columns: [
  //     {
  //       id: "id",
  //       dataType: tableau.dataTypeEnum.int,
  //     },
  //     {
  //       id: "first_name",
  //       alias: "First Name",
  //       dataType: tableau.dataTypeEnum.string,
  //     },
  //     {
  //       id: "last_name",
  //       alias: "Last Name",
  //       dataType: tableau.dataTypeEnum.string,
  //     },
  //     {
  //       id: "position",
  //       alias: "Position",
  //       dataType: tableau.dataTypeEnum.string,
  //     },
  //     {
  //       id: "league_id",
  //       alias: "NBA Player ID",
  //       dataType: tableau.dataTypeEnum.string,
  //     },
  //   ],
  //   getUrlPath: () => `/teams/${portlandTeamId}/players`,
  //   mapper: (data) => ({
  //     id: data.id,
  //     first_name: data.first_name,
  //     last_name: data.last_name,
  //     position: data.function,
  //     league_id: data.league_id,
  //   }),
  // },
  // session: {
  //   id: "session",
  //   alias: "Session",
  //   getUrlPath: () => {
  //     const min = document.getElementById("session-min").value;
  //     const max = document.getElementById("session-max").value;
  //     return `/teams/${portlandTeamId}/training-sessions-and-phases?min=${min}&max=${max}`;
  //   },
  //   mapper: (data) => data,
  //   columns: [
  //     {
  //       id: "id",
  //       dataType: tableau.dataTypeEnum.int,
  //     },
  //     {
  //       id: "description",
  //       alias: "Description",
  //       dataType: tableau.dataTypeEnum.string,
  //     },
  //     {
  //       id: "start_session",
  //       alias: "start_session",
  //       dataType: tableau.dataTypeEnum.datetime,
  //     },
  //     {
  //       id: "end_session",
  //       alias: "end_session",
  //       dataType: tableau.dataTypeEnum.datetime,
  //     },
  //     {
  //       id: "type",
  //       alias: "Type",
  //       dataType: tableau.dataTypeEnum.string,
  //     },
  //   ],
  // },
  statistics: {
    id: "statistics",
    alias: "Statistics",
    getUrlPath: () => {
      const now = new Date();
      const max = now.toISOString();
      const min = "2022-06-01T00:00:00";
      return `/statistics/players/in-team-${portlandTeamId}/sessions?min=${min}&max=${max}`;
    },
    mapper: (data) => {
      return data;
    },
    columns: [
      {
        id: "session_id",
        dataType: tableau.dataTypeEnum.float,
        alias: "Session ID",
      },
      {
        id: "description",
        dataType: tableau.dataTypeEnum.string,
        alias: "Session Description",
      },
      {
        id: "start_session",
        dataType: tableau.dataTypeEnum.string,
        alias: "Session Start",
      },
      {
        id: "end_session",
        dataType: tableau.dataTypeEnum.string,
        alias: "Session End",
      },
      {
        id: "player_id",
        dataType: tableau.dataTypeEnum.float,
        alias: "Player Id",
      },
      {
        id: "first_name",
        dataType: tableau.dataTypeEnum.string,
        alias: "First Name",
      },
      {
        id: "last_name",
        dataType: tableau.dataTypeEnum.string,
        alias: "Last Name",
      },
      {
        id: "league_id",
        dataType: tableau.dataTypeEnum.float,
        alias: "NBA Player ID",
      },
      {
        id: "function",
        dataType: tableau.dataTypeEnum.string,
        alias: "Position",
      },
      {
        id: "accel_avg",
        dataType: tableau.dataTypeEnum.float,
        alias: "Accel Avg",
      },
      {
        id: "accel_load_accum",
        dataType: tableau.dataTypeEnum.float,
        alias: "Accel Load Accum",
      },
      {
        id: "accel_load_accum_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Accel Load Accum Avg/Min",
      },
      {
        id: "accel_load_avg",
        dataType: tableau.dataTypeEnum.float,
        alias: "Accel Load Avg",
      },
      {
        id: "accel_load_max",
        dataType: tableau.dataTypeEnum.float,
        alias: "Accel Load Max",
      },
      {
        id: "accel_max",
        dataType: tableau.dataTypeEnum.float,
        alias: "Accel Max",
      },
      {
        id: "accel_min",
        dataType: tableau.dataTypeEnum.float,
        alias: "Accel Min",
      },
      // { id: "deleted", dataType: tableau.dataTypeEnum.int, alias: "Deleted" },
      {
        id: "distance_acceleration_load_category1",
        dataType: tableau.dataTypeEnum.float,
        alias: "Dist. Accel. Load 1",
      },
      {
        id: "distance_acceleration_load_category2",
        dataType: tableau.dataTypeEnum.float,
        alias: "Dist. Accel. Load 2",
      },
      {
        id: "distance_acceleration_load_category3",
        dataType: tableau.dataTypeEnum.float,
        alias: "Dist. Accel. Load 3",
      },
      {
        id: "distance_acceleration_load_category4",
        dataType: tableau.dataTypeEnum.float,
        alias: "Dist. Accel. Load 4",
      },
      {
        id: "distance_acceleration_load_category5",
        dataType: tableau.dataTypeEnum.float,
        alias: "Dist. Accel. Load 5",
      },
      {
        id: "distance_acceleration_load_category6",
        dataType: tableau.dataTypeEnum.float,
        alias: "Dist. Accel. Load 6",
      },
      {
        id: "distance_acceleration_load_category7",
        dataType: tableau.dataTypeEnum.float,
        alias: "Dist. Accel. Load 7",
      },
      {
        id: "distance_anaerobic_activity",
        dataType: tableau.dataTypeEnum.float,
        alias: "Dist. Anaerobic Activity",
      },
      {
        id: "distance_high_metabolic_load",
        dataType: tableau.dataTypeEnum.float,
        alias: "Dist. High Metab. Load",
      },
      {
        id: "distance_high_metabolic_load_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Dist. High Metab. Load Avg / Min.",
      },
      {
        id: "distance_high_metabolic_power",
        dataType: tableau.dataTypeEnum.float,
        alias: "Dist. High Metab. Power",
      },
      {
        id: "distance_high_metabolic_power_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Dist. High Metab. Power Avg / Min.",
      },
      {
        id: "distance_speed_category1",
        dataType: tableau.dataTypeEnum.float,
        alias: "Dist. Speed 1",
      },
      {
        id: "distance_speed_category1_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Dist. Speed 1 Avg / Min.",
      },
      {
        id: "distance_speed_category2",
        dataType: tableau.dataTypeEnum.float,
        alias: "Dist. Speed 2",
      },
      {
        id: "distance_speed_category2_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Dist. Speed 2 Avg / Min.",
      },
      {
        id: "distance_speed_category3",
        dataType: tableau.dataTypeEnum.float,
        alias: "Dist. Speed 3",
      },
      {
        id: "distance_speed_category3_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Dist. Speed 3 Avg / Min.",
      },
      {
        id: "distance_speed_category4",
        dataType: tableau.dataTypeEnum.float,
        alias: "Dist. Speed 4",
      },
      {
        id: "distance_speed_category4_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Dist. Speed 4 Avg / Min.",
      },
      {
        id: "distance_speed_category5",
        dataType: tableau.dataTypeEnum.float,
        alias: "Dist. Speed 5",
      },
      {
        id: "distance_speed_category5_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Dist. Speed 5 Avg / Min.",
      },
      {
        id: "distance_speed_category6",
        dataType: tableau.dataTypeEnum.float,
        alias: "Dist. Speed 6",
      },
      {
        id: "distance_speed_category6_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Dist. Speed 6 Avg / Min.",
      },
      {
        id: "distance_speed_category7",
        dataType: tableau.dataTypeEnum.float,
        alias: "Dist. Speed 7",
      },
      {
        id: "distance_speed_category7_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Dist. Speed 7 Avg / Min.",
      },
      {
        id: "distance_total",
        dataType: tableau.dataTypeEnum.float,
        alias: "Dist. Total",
      },
      {
        id: "distance_total_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Dist. Total Avg / Min.",
      },
      {
        id: "event_count_acceleration",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Accel.",
      },
      {
        id: "event_count_acceleration_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Accel. Avg / Min.",
      },
      {
        id: "event_count_acceleration_category1",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Accel. 1",
      },
      {
        id: "event_count_acceleration_category1_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Accel. 1 Avg / Min.",
      },
      {
        id: "event_count_acceleration_category2",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Accel. 2",
      },
      {
        id: "event_count_acceleration_category2_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Accel. 2 Avg / Min.",
      },
      {
        id: "event_count_acceleration_category3",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Accel. 3",
      },
      {
        id: "event_count_acceleration_category3_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Accel. 3 Avg / Min.",
      },
      {
        id: "event_count_acceleration_category4",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Accel. 4",
      },
      {
        id: "event_count_acceleration_category4_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Accel. 4 Avg / Min.",
      },
      {
        id: "event_count_acceleration_category5",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Accel. 5",
      },
      {
        id: "event_count_acceleration_category5_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Accel. 5 Avg / Min.",
      },
      {
        id: "event_count_acceleration_category6",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Accel. 6",
      },
      {
        id: "event_count_acceleration_category6_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Accel. 6 Avg / Min.",
      },
      {
        id: "event_count_acceleration_category7",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Accel. 7",
      },
      {
        id: "event_count_acceleration_category7_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Accel. 7 Avg / Min.",
      },
      {
        id: "event_count_ball_possession",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Ball Possession",
      },
      {
        id: "event_count_ball_possession_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Ball Possession Avg / Min.",
      },
      {
        id: "event_count_ball_possession_lost",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Ball Possession Lost",
      },
      {
        id: "event_count_ball_possession_lost_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Ball Possession Lost Avg / Min.",
      },
      {
        id: "event_count_ball_possession_recovery",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Ball Possession Recovery",
      },
      {
        id: "event_count_ball_possession_recovery_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Ball Possession Recovery Avg / Min.",
      },
      {
        id: "event_count_change_of_direction",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Change Of Direction",
      },
      {
        id: "event_count_change_of_direction_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Change Of Direction Avg / Min.",
      },
      {
        id: "event_count_change_of_direction_left",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Change Of Direction Left",
      },
      {
        id: "event_count_change_of_direction_left_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Change Of Direction Left Avg / Min.",
      },
      {
        id: "event_count_change_of_direction_right",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Change Of Direction Right",
      },
      {
        id: "event_count_change_of_direction_right_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Change Of Direction Right Avg / Min.",
      },
      {
        id: "event_count_change_of_orientation",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Change Of Orientation",
      },
      {
        id: "event_count_change_of_orientation_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Change Of Orientation Avg / Min.",
      },
      {
        id: "event_count_counter_attack",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Counter Attack",
      },
      {
        id: "event_count_counter_attack_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Counter Attack Avg / Min.",
      },
      {
        id: "event_count_deceleration",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Decel.",
      },
      {
        id: "event_count_deceleration_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Decel. Avg / Min.",
      },
      {
        id: "event_count_deceleration_category1",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Decel. 1",
      },
      {
        id: "event_count_deceleration_category1_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Decel. 1 Avg / Min.",
      },
      {
        id: "event_count_deceleration_category2",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Decel. 2",
      },
      {
        id: "event_count_deceleration_category2_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Decel. 2 Avg / Min.",
      },
      {
        id: "event_count_deceleration_category3",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Decel. 3",
      },
      {
        id: "event_count_deceleration_category3_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Decel. 3 Avg / Min.",
      },
      {
        id: "event_count_deceleration_category4",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Decel. 4",
      },
      {
        id: "event_count_deceleration_category4_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Decel. 4 Avg / Min.",
      },
      {
        id: "event_count_deceleration_category5",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Decel. 5",
      },
      {
        id: "event_count_deceleration_category5_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Decel. 5 Avg / Min.",
      },
      {
        id: "event_count_deceleration_category6",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Decel. 6",
      },
      {
        id: "event_count_deceleration_category6_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Decel. 6 Avg / Min.",
      },
      {
        id: "event_count_deceleration_category7",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Decel. 7",
      },
      {
        id: "event_count_deceleration_category7_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Decel. 7 Avg / Min.",
      },
      {
        id: "event_count_defence",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Defence",
      },
      {
        id: "event_count_defence_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Defence Avg / Min.",
      },
      {
        id: "event_count_detected_pass",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Detected Pass",
      },
      {
        id: "event_count_detected_pass_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Detected Pass Avg / Min.",
      },
      {
        id: "event_count_detected_pass_missed",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Detected Pass Missed",
      },
      {
        id: "event_count_detected_pass_missed_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Detected Pass Missed Avg / Min.",
      },
      {
        id: "event_count_detected_pass_successful",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Detected Pass Successful",
      },
      {
        id: "event_count_detected_pass_successful_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Detected Pass Successful Avg / Min.",
      },
      {
        id: "event_count_detected_pass_unknown",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Detected Pass Unknown",
      },
      {
        id: "event_count_detected_pass_unknown_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Detected Pass Unknown Avg / Min.",
      },
      {
        id: "event_count_detected_shot_basketball",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Detected Shot Basketball",
      },
      {
        id: "event_count_detected_shot_basketball_0",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Detected Shot Basketball 0",
      },
      {
        id: "event_count_detected_shot_basketball_0_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Detected Shot Basketball 0 Avg / Min.",
      },
      {
        id: "event_count_detected_shot_basketball_1",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Detected Shot Basketball 1",
      },
      {
        id: "event_count_detected_shot_basketball_1_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Detected Shot Basketball 1 Avg / Min.",
      },
      {
        id: "event_count_detected_shot_basketball_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Detected Shot Basketball Avg / Min.",
      },
      {
        id: "event_count_exertion",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Exertion",
      },
      {
        id: "event_count_exertion_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Exertion Avg / Min.",
      },
      {
        id: "event_count_exertion_category1",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Exertion 1",
      },
      {
        id: "event_count_exertion_category1_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Exertion 1 Avg / Min.",
      },
      {
        id: "event_count_exertion_category2",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Exertion 2",
      },
      {
        id: "event_count_exertion_category2_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Exertion 2 Avg / Min.",
      },
      {
        id: "event_count_exertion_category3",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Exertion 3",
      },
      {
        id: "event_count_exertion_category3_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Exertion 3 Avg / Min.",
      },
      {
        id: "event_count_exertion_category4",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Exertion 4",
      },
      {
        id: "event_count_exertion_category4_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Exertion 4 Avg / Min.",
      },
      {
        id: "event_count_full_court_transition",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Full Court Transition",
      },
      {
        id: "event_count_full_court_transition_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Full Court Transition Avg / Min.",
      },
      {
        id: "event_count_full_court_transition_category1",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Full Court Transition 1",
      },
      {
        id: "event_count_full_court_transition_category1_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Full Court Transition 1 Avg / Min.",
      },
      {
        id: "event_count_full_court_transition_category2",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Full Court Transition 2",
      },
      {
        id: "event_count_full_court_transition_category2_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Full Court Transition 2 Avg / Min.",
      },
      {
        id: "event_count_full_court_transition_category3",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Full Court Transition 3",
      },
      {
        id: "event_count_full_court_transition_category3_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Full Court Transition 3 Avg / Min.",
      },
      {
        id: "event_count_heart_rate_recovery",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Heart Rate Recovery",
      },
      {
        id: "event_count_heart_rate_recovery_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Heart Rate Recovery Avg / Min.",
      },
      {
        id: "event_count_jump",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Jump",
      },
      {
        id: "event_count_jump_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Jump Avg / Min.",
      },
      {
        id: "event_count_jump_category1",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Jump 1",
      },
      {
        id: "event_count_jump_category1_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Jump 1 Avg / Min.",
      },
      {
        id: "event_count_jump_category2",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Jump 2",
      },
      {
        id: "event_count_jump_category2_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Jump 2 Avg / Min.",
      },
      {
        id: "event_count_jump_category3",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Jump 3",
      },
      {
        id: "event_count_jump_category3_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Jump 3 Avg / Min.",
      },
      {
        id: "event_count_jump_category4",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Jump 4",
      },
      {
        id: "event_count_jump_category4_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Jump 4 Avg / Min.",
      },
      {
        id: "event_count_jump_category5",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Jump 5",
      },
      {
        id: "event_count_jump_category5_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Jump 5 Avg / Min.",
      },
      {
        id: "event_count_jump_category6",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Jump 6",
      },
      {
        id: "event_count_jump_category6_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Jump 6 Avg / Min.",
      },
      {
        id: "event_count_jump_category7",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Jump 7",
      },
      {
        id: "event_count_jump_category7_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Jump 7 Avg / Min.",
      },
      {
        id: "event_count_mid_court_transition",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Mid Court Transition",
      },
      {
        id: "event_count_mid_court_transition_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Mid Court Transition Avg / Min.",
      },
      {
        id: "event_count_mid_court_transition_category1",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Mid Court Transition 1",
      },
      {
        id: "event_count_mid_court_transition_category1_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Mid Court Transition 1 Avg / Min.",
      },
      {
        id: "event_count_mid_court_transition_category2",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Mid Court Transition 2",
      },
      {
        id: "event_count_mid_court_transition_category2_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Mid Court Transition 2 Avg / Min.",
      },
      {
        id: "event_count_mid_court_transition_category3",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Mid Court Transition 3",
      },
      {
        id: "event_count_mid_court_transition_category3_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Mid Court Transition 3 Avg / Min.",
      },
      {
        id: "event_count_offence",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Offence",
      },
      {
        id: "event_count_offence_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Offence Avg / Min.",
      },
      {
        id: "event_count_pick_and_pop",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Pick And Pop",
      },
      {
        id: "event_count_pick_and_pop_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Pick And Pop Avg / Min.",
      },
      {
        id: "event_count_pick_and_roll",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Pick And Roll",
      },
      {
        id: "event_count_pick_and_roll_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Pick And Roll Avg / Min.",
      },
      {
        id: "event_count_rspct_shot",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Rspct Shot",
      },
      {
        id: "event_count_rspct_shot_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Rspct Shot Avg / Min.",
      },
      {
        id: "event_count_rspct_shot_successful",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Rspct Shot Successful",
      },
      {
        id: "event_count_rspct_shot_successful_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Rspct Shot Successful Avg / Min.",
      },
      {
        id: "event_count_rspct_shot_unsuccessful",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Rspct Shot Unsuccessful",
      },
      {
        id: "event_count_rspct_shot_unsuccessful_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Rspct Shot Unsuccessful Avg / Min.",
      },
      {
        id: "event_count_sprint",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Sprint",
      },
      {
        id: "event_count_sprint_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Sprint Avg / Min.",
      },
      {
        id: "event_count_sprint_category1",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Sprint 1",
      },
      {
        id: "event_count_sprint_category1_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Sprint 1 Avg / Min.",
      },
      {
        id: "event_count_sprint_category2",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Sprint 2",
      },
      {
        id: "event_count_sprint_category2_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Sprint 2 Avg / Min.",
      },
      {
        id: "event_count_sprint_category3",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Sprint 3",
      },
      {
        id: "event_count_sprint_category3_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Sprint 3 Avg / Min.",
      },
      {
        id: "event_count_sprint_category4",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Sprint 4",
      },
      {
        id: "event_count_sprint_category4_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Sprint 4 Avg / Min.",
      },
      {
        id: "event_count_sprint_category5",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Sprint 5",
      },
      {
        id: "event_count_sprint_category5_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Sprint 5 Avg / Min.",
      },
      {
        id: "event_count_sprint_category6",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Sprint 6",
      },
      {
        id: "event_count_sprint_category6_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Sprint 6 Avg / Min.",
      },
      {
        id: "event_count_sprint_category7",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Sprint 7",
      },
      {
        id: "event_count_sprint_category7_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Sprint 7 Avg / Min.",
      },
      {
        id: "event_count_tag",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Tag",
      },
      {
        id: "event_count_tag_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Count Tag Avg / Min.",
      },
      {
        id: "heart_rate_avg",
        dataType: tableau.dataTypeEnum.float,
        alias: "Heart Rate Avg",
      },
      {
        id: "heart_rate_max",
        dataType: tableau.dataTypeEnum.float,
        alias: "Heart Rate Max",
      },
      {
        id: "heart_rate_min",
        dataType: tableau.dataTypeEnum.float,
        alias: "Heart Rate Min",
      },
      {
        id: "human_core_temperature_avg",
        dataType: tableau.dataTypeEnum.float,
        alias: "Human Core Temperature Avg",
      },
      {
        id: "human_core_temperature_max",
        dataType: tableau.dataTypeEnum.float,
        alias: "Human Core Temperature Max",
      },
      {
        id: "jump_height_max",
        dataType: tableau.dataTypeEnum.float,
        alias: "Jump Height Max",
      },
      {
        id: "jump_load",
        dataType: tableau.dataTypeEnum.float,
        alias: "Jump Load",
      },
      {
        id: "jump_load_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Jump Load Avg / Min.",
      },
      {
        id: "jump_load_per_mass",
        dataType: tableau.dataTypeEnum.float,
        alias: "Jump Load / Mass",
      },
      {
        id: "jump_load_per_mass_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Jump Load / Mass Avg / Min.",
      },
      {
        id: "last_group",
        dataType: tableau.dataTypeEnum.float,
        alias: "Last Group",
      },
      {
        id: "last_tag_ids",
        dataType: tableau.dataTypeEnum.string,
        alias: "Last Tag Ids",
      },
      {
        id: "load_acceleration_load_category1",
        dataType: tableau.dataTypeEnum.float,
        alias: "Load Accel. Load 1",
      },
      {
        id: "load_acceleration_load_category2",
        dataType: tableau.dataTypeEnum.float,
        alias: "Load Accel. Load 2",
      },
      {
        id: "load_acceleration_load_category3",
        dataType: tableau.dataTypeEnum.float,
        alias: "Load Accel. Load 3",
      },
      {
        id: "load_acceleration_load_category4",
        dataType: tableau.dataTypeEnum.float,
        alias: "Load Accel. Load 4",
      },
      {
        id: "load_acceleration_load_category5",
        dataType: tableau.dataTypeEnum.float,
        alias: "Load Accel. Load 5",
      },
      {
        id: "load_acceleration_load_category6",
        dataType: tableau.dataTypeEnum.float,
        alias: "Load Accel. Load 6",
      },
      {
        id: "load_acceleration_load_category7",
        dataType: tableau.dataTypeEnum.float,
        alias: "Load Accel. Load 7",
      },
      {
        id: "mechanical_accel_category1",
        dataType: tableau.dataTypeEnum.float,
        alias: "Mech. Accel 1",
      },
      {
        id: "mechanical_accel_category1_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Mech. Accel 1 Avg / Min.",
      },
      {
        id: "mechanical_accel_category2",
        dataType: tableau.dataTypeEnum.float,
        alias: "Mech. Accel 2",
      },
      {
        id: "mechanical_accel_category2_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Mech. Accel 2 Avg / Min.",
      },
      {
        id: "mechanical_accel_category3",
        dataType: tableau.dataTypeEnum.float,
        alias: "Mech. Accel 3",
      },
      {
        id: "mechanical_accel_category3_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Mech. Accel 3 Avg / Min.",
      },
      {
        id: "mechanical_accel_category4",
        dataType: tableau.dataTypeEnum.float,
        alias: "Mech. Accel 4",
      },
      {
        id: "mechanical_accel_category4_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Mech. Accel 4 Avg / Min.",
      },
      {
        id: "mechanical_accel_total",
        dataType: tableau.dataTypeEnum.float,
        alias: "Mech. Accel Total",
      },
      {
        id: "mechanical_accel_total_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Mech. Accel Total Avg / Min.",
      },
      {
        id: "mechanical_decel_category1",
        dataType: tableau.dataTypeEnum.float,
        alias: "Mech. Decel 1",
      },
      {
        id: "mechanical_decel_category1_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Mech. Decel 1 Avg / Min.",
      },
      {
        id: "mechanical_decel_category2",
        dataType: tableau.dataTypeEnum.float,
        alias: "Mech. Decel 2",
      },
      {
        id: "mechanical_decel_category2_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Mech. Decel 2 Avg / Min.",
      },
      {
        id: "mechanical_decel_category3",
        dataType: tableau.dataTypeEnum.float,
        alias: "Mech. Decel 3",
      },
      {
        id: "mechanical_decel_category3_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Mech. Decel 3 Avg / Min.",
      },
      {
        id: "mechanical_decel_category4",
        dataType: tableau.dataTypeEnum.float,
        alias: "Mech. Decel 4",
      },
      {
        id: "mechanical_decel_category4_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Mech. Decel 4 Avg / Min.",
      },
      {
        id: "mechanical_decel_total",
        dataType: tableau.dataTypeEnum.float,
        alias: "Mech. Decel Total",
      },
      {
        id: "mechanical_decel_total_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Mech. Decel Total Avg / Min.",
      },
      {
        id: "mechanical_intensity",
        dataType: tableau.dataTypeEnum.float,
        alias: "Mech. Intensity",
      },
      {
        id: "mechanical_intensity_defence",
        dataType: tableau.dataTypeEnum.float,
        alias: "Mech. Intensity Defence",
      },
      {
        id: "mechanical_intensity_offence",
        dataType: tableau.dataTypeEnum.float,
        alias: "Mech. Intensity Offence",
      },
      {
        id: "mechanical_load",
        dataType: tableau.dataTypeEnum.float,
        alias: "Mech. Load",
      },
      {
        id: "mechanical_load_defence",
        dataType: tableau.dataTypeEnum.float,
        alias: "Mech. Load Defence",
      },
      {
        id: "mechanical_load_offence",
        dataType: tableau.dataTypeEnum.float,
        alias: "Mech. Load Offence",
      },
      {
        id: "metabolic_power_avg",
        dataType: tableau.dataTypeEnum.float,
        alias: "Metab. Power Avg",
      },
      {
        id: "metabolic_power_max",
        dataType: tableau.dataTypeEnum.float,
        alias: "Metab. Power Max",
      },
      {
        id: "metabolic_power_per_mass_avg",
        dataType: tableau.dataTypeEnum.float,
        alias: "Metab. Power / Mass Avg",
      },
      {
        id: "metabolic_power_per_mass_max",
        dataType: tableau.dataTypeEnum.float,
        alias: "Metab. Power / Mass Max",
      },
      {
        id: "metabolic_work",
        dataType: tableau.dataTypeEnum.float,
        alias: "Metab. Work",
      },
      {
        id: "metabolic_work_avg_per_minute",
        dataType: tableau.dataTypeEnum.float,
        alias: "Metab. Work Avg / Min.",
      },
      {
        id: "number",
        dataType: tableau.dataTypeEnum.float,
        alias: "Number",
      },
      {
        id: "only_imu",
        dataType: tableau.dataTypeEnum.float,
        alias: "Only Imu",
      },
      {
        id: "physio_intensity",
        dataType: tableau.dataTypeEnum.float,
        alias: "Physio Intensity",
      },
      {
        id: "physio_load",
        dataType: tableau.dataTypeEnum.float,
        alias: "Physio Load",
      },
      {
        id: "sp_usecase",
        dataType: tableau.dataTypeEnum.string,
        alias: "Sp Usecase",
      },
      {
        id: "speed_avg",
        dataType: tableau.dataTypeEnum.float,
        alias: "Speed Avg",
      },
      {
        id: "speed_distance_per_time",
        dataType: tableau.dataTypeEnum.float,
        alias: "Speed Dist. / Time",
      },
      {
        id: "speed_max",
        dataType: tableau.dataTypeEnum.float,
        alias: "Speed Max",
      },
      {
        id: "synced",
        dataType: tableau.dataTypeEnum.float,
        alias: "Synced",
      },
      {
        id: "time_acceleration_load_category1",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Accel. Load 1",
      },
      {
        id: "time_acceleration_load_category2",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Accel. Load 2",
      },
      {
        id: "time_acceleration_load_category3",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Accel. Load 3",
      },
      {
        id: "time_acceleration_load_category4",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Accel. Load 4",
      },
      {
        id: "time_acceleration_load_category5",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Accel. Load 5",
      },
      {
        id: "time_acceleration_load_category6",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Accel. Load 6",
      },
      {
        id: "time_acceleration_load_category7",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Accel. Load 7",
      },
      {
        id: "time_anaerobic_activity",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Anaerobic Activity",
      },
      {
        id: "time_ball_possession",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Ball Possession",
      },
      {
        id: "time_heart_rate_category1",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Heart Rate 1",
      },
      {
        id: "time_heart_rate_category2",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Heart Rate 2",
      },
      {
        id: "time_heart_rate_category3",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Heart Rate 3",
      },
      {
        id: "time_heart_rate_category4",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Heart Rate 4",
      },
      {
        id: "time_heart_rate_category5",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Heart Rate 5",
      },
      {
        id: "time_heart_rate_category6",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Heart Rate 6",
      },
      {
        id: "time_heart_rate_category7",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Heart Rate 7",
      },
      {
        id: "time_high_metabolic_load",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time High Metab. Load",
      },
      {
        id: "time_metabolic_power_category1",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Metab. Power 1",
      },
      {
        id: "time_metabolic_power_category2",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Metab. Power 2",
      },
      {
        id: "time_metabolic_power_category3",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Metab. Power 3",
      },
      {
        id: "time_metabolic_power_category4",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Metab. Power 4",
      },
      {
        id: "time_metabolic_power_category5",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Metab. Power 5",
      },
      {
        id: "time_metabolic_power_category6",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Metab. Power 6",
      },
      {
        id: "time_metabolic_power_category7",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Metab. Power 7",
      },
      {
        id: "time_on_playing_field",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time On Playing Field",
      },
      {
        id: "time_on_playing_field_defence",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time On Playing Field Defence",
      },
      {
        id: "time_on_playing_field_offence",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time On Playing Field Offence",
      },
      {
        id: "time_speed_category1",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Speed 1",
      },
      {
        id: "time_speed_category2",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Speed 2",
      },
      {
        id: "time_speed_category3",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Speed 3",
      },
      {
        id: "time_speed_category4",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Speed 4",
      },
      {
        id: "time_speed_category5",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Speed 5",
      },
      {
        id: "time_speed_category6",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Speed 6",
      },
      {
        id: "time_speed_category7",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Speed 7",
      },
      {
        id: "time_total",
        dataType: tableau.dataTypeEnum.float,
        alias: "Time Total",
      },
      {
        id: "track_while_clock_stopped",
        dataType: tableau.dataTypeEnum.float,
        alias: "Track While Clock Stopped",
      },
      {
        id: "trimp",
        dataType: tableau.dataTypeEnum.float,
        alias: "Trimp",
      },
      {
        id: "type",
        dataType: tableau.dataTypeEnum.string,
        alias: "Type",
      },
      {
        id: "weekday",
        dataType: tableau.dataTypeEnum.float,
        alias: "Weekday",
      },

      // { id: "§speed_max_ratio", dataType: tableau.dataTypeEnum.float },
    ],
  },
};
